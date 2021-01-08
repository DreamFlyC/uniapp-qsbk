<template>
	<view class="uni-tab-bar">
		<!-- 分类列表 -->
		<scroll-view class="uni-swiper-tab" scroll-x :show-scrollbar="false" :class="fixed ? 'fxied' : ''" :scroll-into-view="scrollInto">
			<block v-for="(tab, index) in tabbars" :key="index" :style="scrollStyle">
				<view
					class="swiper-tab-list"
					:id="tab.id"
					:data-current="index"
					:class="tabIndex === index ? 'active' : ''"
					@tap="handleTabTap(index, tab.categoryId)"
					:style="scrollItemStyle"
				>
					{{ tab.categoryName }}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		/* tabbar数据 */
		tabbars: {
			type: Array,
			default() {
				return [];
			}
		},
		/* 当前页签 */
		tabIndex: {
			type: Number,
			default: 0
		},
		/* 是否固定头部 */
		fixed: {
			type: Boolean,
			default: false
		},
		/* 滚动标记 */
		scrollFlag: {
			type: Boolean,
			default: false
		},
		scrollStyle: {
			type: String,
			default: ''
		},
		scrollItemStyle: {
			type: String,
			default: ''
		},
		scrollInto: {
			type: String,
			default: ''
		}
	},
	methods: {
		/* 导航栏点击事件 */
		handleTabTap(index, categoryId) {
			if (this.currentIndex !== index) {
				this.currentIndex = index;
				this.$emit('handleTabTap', { index: index, categoryId: categoryId });
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.fxied {
	position: fixed;
	z-index: 100;
}

/* 导航栏分类 */

.swiper-tab-list {
	color: #969696;
	font-weight: bold;
}
.uni-tab-bar .active {
	color: #343434;
}

.active .swiper-tab-line {
	border-top: 5rpx solid #fede33;
	border-bottom: 5rpx solid #fede33;
	border-radius: 20rpx;
	width: 70rpx;
	margin: 0 auto;
}

/* 不显示下边框的线 */
.uni-swiper-tab {
	border-bottom: 0;
}
</style>
