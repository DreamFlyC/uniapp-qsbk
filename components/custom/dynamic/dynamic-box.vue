<template>
	<view class="container m-top-10">
		<!-- 用户信息区域 -->
		<view class="topic-user uni-flex-sbc">
			<view class="uni-flex-c">
				<image class="topic-user-avatar" :src="item.userInfo.avatar" mode="widthFix" lazy-load="true"></image>
				<view class="topic-user-info">
					<view class="uni-flex-ac">
						<!-- 用户名称 -->
						<text class="topic-user-name">{{ item.userInfo.nickname }}</text>
						<!-- 用户性别图标 -->
						<view class="topic-user-sex icon iconfont" :class="item.userInfo.sex == 1 ? 'icon-nan' : 'icon-nv'">{{ item.userInfo.age }}</view>
					</view>
					<text class="topic-user-desc">{{ item.userInfo.time |momentTime }}</text>
				</view>
			</view>
			<view class="uni-flex-c"> <view class="topic-user-follow" v-if="!item.userInfo.follow && type=='near'" @click="onFollow()">关注</view> <view class="topic-user-del">×</view> </view>
		</view>
		<!-- 主体区域 -->
		<view class="topic-main b-b">
			<!-- 标题内容 -->
			<view class="topic-content">{{ item.title }}</view>
			<block v-if="item.mediaInfo">
				<!-- 图片 -->
				<qs-img-grid v-if="item.mediaInfo.type === 'img'" oneImgWidth="100%" :imageList="item.mediaInfo.imageList"></qs-img-grid>
				<!-- 视频 -->
				<view class="topic-video" v-if="item.mediaInfo.type === 'video'"> 
					<video :src="item.mediaInfo.src"></video>
					<view class="topic-media-bofang iconfont icon-bofang"></view>
				</view>
				<!-- 分享 -->
				<view class="topic-share" v-if="item.mediaInfo.type === 'share'">
					<image :src="item.mediaInfo.src" mode="aspectFill"></image> 
					<view class="share-title">
						<text v-html="item.mediaInfo.title"></text>
					</view>
				</view>
				
			</block>
			<!-- 地址信息 -->
			<view class="uni-flex-sbc" style="margin: 20rpx 0;">
				<view class="uni-flex-item">{{ item.userInfo.address[1] }} . {{ item.userInfo.address[2] }}</view>
				<view class="uni-flex-sbc uni-flex-item">
					<!-- 转发 -->
					<view class="topic-oper-box"> <view class="icon iconfont icon-zhuanfa2"></view> </view>
					<!-- 评论 -->
					<view class="topic-oper-box">
						<view class="iconNum icon iconfont icon-pinglun1"></view> <text style="margin-left: 10rpx;">{{ item.operInfo.commentNum }}</text>
					</view>
					<!-- 点赞 -->
					<view class="topic-oper-box">
						<view class="icon iconfont icon-dianzan"></view> <text style="margin-left: 10rpx;">{{ item.operInfo.zanNum }}</text>
					</view>
				</view>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
import qsImgGrid from '@/components/custom/qs-img-grid/qs-img-grid.vue';

import moment from "moment";
export default {
	components: {
		qsImgGrid
	},
	props: {
		item: Object,
		type:{
			type:String,
			default:'near'
		}
	},
	filters:{
		momentTime:function(value){
			if(value){
				return moment(value).startOf('minutes').fromNow(); //1小时前
			}
		}
	},
	data() {
		return {
			itemData: this.item
		};
	},
	methods:{
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
		.topic-user-sex {
			background-color: #ec6f8b;
			border-radius: 20rpx;
			padding: 0rpx 10rpx;
			color: #ffffff;
			margin-left: 10rpx;
			font-size: 24rpx;
			height: 40rpx;
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

.topic-main {
	/* 头像宽度 + margin-right的宽度 */
	margin-left: 90rpx;
	padding-top: 10px;
	color: #282828;
	/* 内容 */
	.topic-content {
		font-size: 30rpx;
		text-align: justify;
	}

	.topic-oper-box {
		display: flex;
		align-items: center;
		// margin-left: 20rpx;
	}

	.icon-zhuanfa {
		font-size: 40rpx;
	}

	.icon-pinlun {
		font-size: 40rpx;
	}
	.icon-dianzan {
		font-size: 48rpx;
		color: #282828;
	}

	.topic-video {
		border-radius: 10rpx;
		overflow: hidden;
		height: 450rpx;
		position: relative;
		video {
			width: 100%;
			height: 100%;
			background-color: #808080;
		}
		.topic-media-bofang {
			color: #fff;
			font-size: 100rpx;
			position: absolute;
			top: 24.5%;
			left: 43%;
			z-index: 10;
		}
	}

	/* 分享 */
	.topic-share {
		display: flex;
		background-color: #f7f7f7;
		border-radius: 10rpx;
		height: 160rpx;
		overflow: hidden;
		image {
			width: 160rpx;
			height: 160rpx;
			border-radius: 10rpx;
		}
		.share-title {
			width: calc(100% - 140rpx);
			padding: 10rpx;
			font-size: 26rpx;
			
			text{
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
			}
			
		}
	}
}
</style>
