<template>
	<view class="nothing">
		<image src="/static/img/nothing.jpg"></image> <view :style="textStyle">{{ text }}</view>
	</view>
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: '没有搜索到相关内容~'
		},
		textStyle: {
			type: Object,
			default() {
				return {
					marginTop: '20px',
					color: '#969696',
					fontWeight: '400'
				};
			}
		}
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.nothing {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-weight: 500;
	image {
		width: 300rpx;
		height: 300rpx;
	}
}
</style>
