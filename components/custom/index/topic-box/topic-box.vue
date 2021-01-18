<template>
	<view class="container b-b">
		<!-- 用户信息区域 -->
		<view class="topic-user uni-flex-sbc">
			<view class="uni-flex-c">
				<image class="topic-user-avatar" :src="item.userInfo.avatar" mode="widthFix" lazy-load="true"></image>
				<view class="topic-user-info">
					<text class="topic-user-name">{{ item.userInfo.nickname }}</text>
					<br />
					<text class="topic-user-desc">{{ item.userInfo.desc }}</text>
				</view>
			</view>
			<view class="uni-flex-c">
				<view class="topic-user-follow" v-if="!item.userInfo.follow" @click="onFollow()">关注</view>
				<view class="topic-user-del">×</view>
			</view>
		</view>
		<!-- 标题内容 -->
		<view class="topic-content">{{ item.title }}</view>
		<!-- 媒体区域 -->
		<view class="topic-media">
			<image :src="item.mediaInfo.titlePic" mode="widthFix" lazy-load :data-src="item.mediaInfo.titlePic" @click="onImgClick"></image>
			<template v-if="item.mediaInfo.type === 'video'">
				<view class="topic-media-bofang iconfont icon-bofang"></view>
				<view class="topic-media-time">{{ item.mediaInfo.countTime }}</view>
			</template>
		</view>
		<!-- 热门评论 -->
		<view class="topic-comment">
			<view class="topic-comment-user uni-flex-sbc">
				<view style="display: flex;align-items: center;">
					<image class="topic-comment-user-avatar" :src="item.comment.userInfo.avatar" mode="widthFix" :lazy-load="true"></image>
					<text class="topic-comment-user-name">{{ item.comment.userInfo.nickname }}</text>
				</view>
				<view>
					<view class="topic-comment-user-zan">{{ item.comment.dingNum }} 赞</view>
				</view>
			</view>
			<view class="topic-comment-content">{{ item.comment.content }}</view>
		</view>
		<!-- 点赞/踩区域 -->
		<view class="topic-operation uni-flex-sbc">
			<view class="uni-flex-c">
				<view class="uni-flex-c">
					<view class="iconNum icon iconfont icon-xiaolian" :class="{ active: item.operInfo.flag === 1 }" @click="onSmileClick(item.operInfo.flag)"></view>
					<view>{{ item.operInfo.smileNum }}</view>
				</view>
				<view class="uni-flex-c">
					<view class="iconNum icon iconfont icon-kulian" :class="{ active: item.operInfo.flag === 2 }" @click="onCryClick(item.operInfo.flag)"></view>
					<view>{{ item.operInfo.cryNum }}</view>
				</view>
			</view>
			<view class="uni-flex-right" style="margin-right: 0;">
				<view class="uni-flex-c">
					<view class="iconNum icon iconfont icon-pinglun"></view>
					<view>{{ item.operInfo.commentNum }}</view>
				</view>
				<view class="uni-flex-c" style="margin-right: 0;">
					<view class="iconNum icon iconfont icon-zhuanfa"></view>
					<view>{{ item.operInfo.shareNum }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { previewImage} from '../../../../common/js/img.js'
const smile_flag = 1;
const cry_flag = 2;
export default {
	props: {
		item: Object,
		index: Number
	},
	data() {
		return {
			itemData: this.item,
			indexData: this.index
		};
	},
	methods: {
		/* 点击图片预览 */
		onImgClick(e){
			let img = e.currentTarget.dataset.src;
			previewImage(img,new Array(img))
		},
		
		/* 点击笑脸事件 */
		onSmileClick(flag) {
			/* 1.如果已经是笑脸状态,直接返回 */
			if (flag === smile_flag) return;
			/* 2.将flag置为笑脸 */
			this.itemData.operInfo.flag = smile_flag;
			this.itemData.operInfo.smileNum++;
			this.itemData.operInfo.cryNum--;
			this.$emit('handleSmileClick',this.itemData)
		},

		/* 点击哭脸事件 */
		onCryClick(flag) {
			if (flag === cry_flag) return;
			/* 2.将flag置为哭脸 */
			this.itemData.operInfo.flag = cry_flag;
			this.itemData.operInfo.cryNum++;
			this.itemData.operInfo.smileNum--;
			this.$emit('handleSmileClick',this.itemData)
		},
		
		/* 关注 */
		onFollow(){
			console.log(this.itemData);
			uni.showToast({
				title:'关注成功',
				icon:'success',
				success: () => {
					this.itemData.userInfo.follow = true
					this.$emit('handleFollowClick',this.itemData)
				}
			})
			
		}
	}
};
</script>

<style lang="scss" scoped>
/* 糗事主题 */
.container {
	/* 用户相关 */
	.topic-user {
		height: 82rpx;
		.topic-user-avatar {
			width: 70rpx;
			height: 70rpx;
			border-radius: 50%;
			margin-right: 20rpx;
		}
		.topic-user-info {
			line-height: 40rpx;
			.topic-user-name {
				font-size: 30rpx;
				color: var(--bColor);
				font-weight: 500;
			}
			.topic-user-desc {
				font-size: 26rpx;
				color: #cccccc;
			}
		}
		.topic-user-follow {
			background-color: #f4f4f4;
			color: #000000;
			font-size: 24rpx;
			padding: 0rpx 20rpx;
			border-radius: 20rpx;
			margin-right: 20rpx;
		}
		.topic-user-del {
			color: #d7d7d7;
			font-size: 40rpx;
		}
	}

	/* 内容 */
	.topic-content {
		margin-top: 20rpx;
		font-size: 30rpx;
	}

	/* 图片或者视频 */
	.topic-media {
		position: relative;
		image {
			background-color: #f8f7f7;
			width: 100%;
			border-radius: 10rpx;
		}
		.topic-media-bofang {
			color: #fff;
			font-size: 100rpx;
			position: absolute;
			top: 25%;
			left: 42%;
			z-index: 10;
		}
		.topic-media-time {
			display: inline-block;
			font-size: 24rpx;
			color: #ffffff;
			background-color: #38353a;
			border-radius: 30rpx;
			padding: 2rpx 14rpx;
			position: absolute;
			bottom: 30rpx;
			right: 20rpx;
		}
	}

	/* 最热评论 */
	.topic-comment {
		background-color: #f8f7f7;
		padding: 20rpx;
		border-radius: 10rpx;
		.topic-comment-user {
			font-size: 20rpx !important;
			color: #9c9c9c;
			.topic-comment-user-avatar {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
			.topic-comment-user-name {
				display: inline-block;
				font-weight: 500;
			}
		}
		.topic-comment-content {
			margin-top: 10rpx;
			font-size: 30rpx;
			color: #000000;
		}
	}

	/* 操作 点赞,踩等 */
	.topic-operation {
		
		padding: 30rpx 0;
		color: #2c2c2c;
		view {
			margin-right: 10rpx;
		}
		.active {
			color: #fbea66;
		}
		.iconfont{
			font-size: 40rpx;
		}
		
	}
}
</style>
