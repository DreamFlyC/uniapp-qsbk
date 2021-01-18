<template>
	<view class="container f-w-5">
		<view class="baoshe-box">
			
			<view  v-for="(item,index) in items" :key="index" class="baoshe-item" @tap="_onClick(item.title)">
				<image :src="item.img" mode="aspectFill"></image>
				<view class="baoshe-right"> <view>{{item.title}}</view> <view>帖子 {{item.num}} 浏览 {{item.look}}</view> </view>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			items:[
				{
					img:'/static/demo/datapic/21.jpg',
					title:'每日沙雕表情包',
					num: 6085,
					look: 472501
				},
				{
					img:'/static/demo/datapic/22.jpg',
					title:'快乐新年在糗百',
					num: 6865,
					look: 353142
				}
			]
		};
	},
	methods: {
		_onClick(title){
			let pages = getCurrentPages()
			let nowPage = pages[pages.length - 1]; //当前页页面实例
			let prevPage = pages[pages.length - 2]; //上一页页面实例
			// 向上一页面传值
			prevPage.$vm.huati.title = title
			prevPage.$vm.huati.active = true
			uni.navigateBack({
				delta:1
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.baoshe-box {
	border-top: 1px solid #f8f7f7;
	.baoshe-item {
		padding: 20rpx 20rpx 20rpx 0rpx;
		display: flex;
		border-bottom: 1px solid #F8F7F7;
		image {
			width: 90rpx;
			height: 90rpx;
			margin-right: 20rpx;
			border-radius: 10rpx;
		}
		
		.baoshe-right > view:first-child {
			color: #222222;
			font-size: 26rpx;
			letter-spacing: 2px;
		}

		.baoshe-right > view:last-child {
			color: #b2b2b2;
			font-size: 24rpx;
		}
	}
}
</style>
