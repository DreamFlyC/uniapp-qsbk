<template>
	<view>
		<view class="uni-flex-c">
			<view class="search_wrap">
				<view class="icon"> <qs-icon iconName="icon-sousuo" iconSize="28"></qs-icon> </view>
				<input id="input" disabled @tap="goToSearch" type="text" :placeholder="text" placeholder-style="font-size:26rpx;color:#ccc;text-align:center" />
			</view>
			<slot name="right"></slot>
		</view>
	</view>

	<!-- <view class="uni-flex-c">
			<view class="flex-1 search_wrap mr-2">
				<view class="icon">
					<qs-icon iconName="icon-sousuo" iconSize="28"></qs-icon>
				</view>
				<input class="text-center" id="input" disabled @tap="goToSearch" type="text" :placeholder="text" placeholder-style="font-size:26rpx;color:#ccc;text-align:center" />
			</view>
			<slot name="right"></slot>
		</view>
	</view> -->
</template>

<script>
let timer = null;
export default {
	props: {
		text: {
			type: String,
			default: ''
		},
		type: {
			type: [String, Number],
			default: ''
		}
	},
	data() {
		return {};
	},
	methods: {
		goToSearch() {
			// let input=uni.createSelectorQuery().select("#input")

			uni.navigateTo({
				url: `/pages/search/search?type=${this.type}`
			}),
				(timer = setTimeout(() => {
					uni.hideKeyboard();

					clearTimeout(timer);
				}, 1000));
		}
	}
};
</script>

<style lang="scss" scoped>
.search_wrap {
	border-radius: 20rpx;
	background-color: #f7f7f7;
	position: relative;
	height: 60rpx;
	flex: 1;

	.icon {
		color: #ccc;
		width: 28rpx;
		height: 28rpx;
		text-align: center;
		line-height: 28rpx;
		font-weight: bold;
		position: absolute;
		left: 35%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	input {
		height: 60rpx;
		text-align: center;
	}
}
</style>
