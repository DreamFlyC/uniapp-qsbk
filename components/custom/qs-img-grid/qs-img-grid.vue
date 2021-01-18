<template>
	<!-- 新版九宫格智能处理 -->
	<view class="imgBox">
		<view :class="imageListClass" :style="imagesData.length == 1 ? 'width:' + oneImgWidth : ''" v-for="(img, index) in imagesData" :key="index">
			<view class="bgsize">
				<image class="img" :src="img" mode="aspectFill" @tap="previewImage(img)"></image>
				<image v-if="showDelBtn" class="guanbi" src="/static/img/guanbi.svg" mode="" @tap="delImage(index)"></image>
			</view>
		</view>
	</view>
</template>

<script>
import { previewImage } from '@/common/js/img.js';
export default {
	props: {
		// 单张照片模式
		oneImgWidth: {
			type: String,
			default: '60%'
		},
		imageList: {
			type: Array,
			default() {
				return [];
			}
		},
		showDelBtn: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			imagesData: this.imageList,
			imageListClass: ''
		};
	},
	watch: {
		imageList(newValue, oldValue) {
			this.imagesData = this.imageList;
		},
		imagesData(newValue, oldValue) {
			/* 动态渲染imageListClass */
			this.renderimageListClass();
		}
	},
	mounted() {
		/* 动态渲染imageListClass */
		this.renderimageListClass();
	},
	methods: {
		renderimageListClass() {
			let addClass = '';
			switch (this.imagesData.length) {
				case 1:
					addClass = 'one';
					break;
				case 2:
				case 4:
					addClass = 'two';
					break;
				case 3:
				case 6:
				case 9:
					addClass = 'three';
					break;
				case 5:
				case 8:
					addClass = 'five';
					break;
				case 7:
					addClass = 'seven';
					break;
				default:
					console.log('默认');
					break;
			}
			this.imageListClass = addClass;
		},

		/* 预览图片 */
		previewImage(img) {
			previewImage(img, this.imagesData);
			this.$emit('previewImage', { src: img, list: this.imagesData });
		},
		delImage(index) {
			uni.showModal({
				content: '确认移除该图片?',
				success: res => {
					if (res.confirm) {
						this.imagesData.splice(index, 1);
					} else if (res.cancel) {
					}
				}
			});
			this.$emit('delImage', { index: index });
		}
	}
};
</script>

<style lang="scss" scoped>
/* 图片列表布局 */
.imgBox {
	margin-bottom: 20rpx 0;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	border-radius: 10rpx;
	overflow: hidden;
	// 1张 1,2张 1-1, 3张 1-1-1, 4张 2-2,5张2-3, 6张 3-3, 7张2-2-3,8张 2-3-3, 9张 3-3-3

	.one {
		width: 60%;
		height: 480rpx;
	}

	.two,
	.five:nth-of-type(-n + 2),
	.seven:nth-of-type(-n + 4) {
		width: calc(98% / 2); /* calc里面的运算符两边要空格 */
		height: 350rpx;
	}
	.three,
	.five:nth-of-type(n + 3),
	.seven:nth-of-type(n + 5) {
		width: calc(98% / 3); /* calc里面的运算符两边要空格 */
		height: 203rpx;
	}

	.bgsize {
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-position-x: center;
		background-position-y: center;
		background-size: contain;
		position: relative;
		.img {
			width: 100%;
			height: inherit;
			background-color: #ffffff;
		}

		.guanbi {
			position: absolute;
			right: 10rpx;
			top: 10rpx;
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			overflow: hidden;
			border: 0;
			z-index: 2;
			background-color: #b2b2b2;
		}
	}
}
</style>
