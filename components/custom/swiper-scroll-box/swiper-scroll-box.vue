<template>
	<view class="main-box animate__animated animate__fadeInUp">
		<swiper :style="{ height: swiperHeight + 'px' }" :current="tabIndex" @change="handleSwiperChange">
			<swiper-item v-for="(items, index) in tabList" :key="index">
				<scroll-view v-if="items.data.length" scroll-y class="list" @scrolltolower="handleLoadMore()" enable-back-to-top>
					
				</scroll-view>
	
				<!-- 没有数据 -->
				<view v-else style="margin-top: 200rpx;"> <no-data></no-data> </view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				swiperHeight: 500,
				tabList:[]
			}
		},
	}
</script>

<style>
</style>
