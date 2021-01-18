<template>
	<view class="emoji" :style="{ height: S_Height + 'px' }">
		<swiper-tab style="height:50px;" :tabbars="tabbars" :tabIndex="tabIndex" :scrollFlag="true" @handleTabTap="handleTabTap"></swiper-tab>

		<swiper :style="{ height: S_Height - 50 + 'px' }" :current="tabIndex" @change="handleSwiperChange">
			<!-- 最近使用 -->
			<!-- <swiper-item>
				<scroll-view v-if="nearEmoji.length" scroll-y class="list">
					<view class="nearEmoji">
						<view> <image v-for="(item, key) in nearEmoji" :key="key" @click="clickemoji(item)" :src="item" mode=""></image> </view>
					</view>
				</scroll-view>
				<no-data style="height: 100%;" text="还没有使用过表情哦~" v-else></no-data>
			</swiper-item> -->

			<!--糗事  -->
			<swiper-item>
				<scroll-view v-if="png_list.length" scroll-y class="list">
					<view class="emojiPng">
						<view v-for="(list, index) in png_list" :key="index">
							<image v-for="(item, key) in list" :key="key" @click="clickemoji(item, index, key)" :src="item" mode=""></image>
						</view>
					</view>
				</scroll-view>
				<!-- 没有数据 -->
				<no-data style="height: 100%;" text="还没有使用过表情哦~" v-else></no-data>
			</swiper-item>

			<!-- 全部表情 -->
			<!-- <swiper-item>
				<scroll-view v-if="gif_list.length" scroll-y class="list">
					<view class="emojiGif">
						<view v-for="(list, index) in gif_list" :key="index"> <image v-for="(item, key) in list" :key="key" @click="clickemoji(item, index, key)" :src="item" mode=""></image> </view>
					</view>
				</scroll-view>
				<no-data style="height: 100%;" text="还没有使用过表情哦~" v-else></no-data>
			</swiper-item> -->
		</swiper>
	</view>
</template>

<script>
let arr = [];

import swiperTab from '../swiper-tab/swiper-tab.vue';
import noData from '../no-data/no-data.vue';
import { getEmojiPng, getEmojiGif } from '@/common/js/img.js';
export default {
	components: {
		swiperTab,
		noData
	},
	props: {
		keyboardHeight: {
			type: Number,
			default: 378
		}
	},
	computed: {
		S_Height: function() {
			return Math.max(parseInt(this.keyboardHeight), parseInt(this.emojiHeight));
		}
	},
	data() {
		return {
			emojiHeight: 378,
			//糗事表情png
			bq_emoji: [
				[0, 1, 2, 3, 4, 5, 6],
				[7, 8, 9, 10, 11, 12, 13],
				[14, 15, 16, 17, 18, 19, 20],
				[21, 22, 23, 24, 25, 26, 27],
				[28, 29, 30, 31, 32, 33, 34],
				[35, 36, 37, 38, 39, 40, 41],
				[42, 43, 44, 45, 46, 47, 48],
				[49, 50, 51, 52, 53, 54, 55],
				[56, 57, 58, 59, 60, 61, 62]
			],
			//全部表情jif
			all_emjoi: [
				[100, 101, 102, 103, 104, 105, 106],
				[107, 108, 109, 110, 111, 112, 113],
				[114, 115, 116, 117, 118, 119, 120],
				[121, 122, 123, 124, 125, 126, 127],
				[128, 129, 130, 131, 132, 133, 134],
				[135, 136, 137, 138, 139, 140, 141],
				[142, 143, 144, 145, 146, 147, 148],
				[149, 150, 151, 152, 153, 154, 178],
				[179, 180, 181, 182, 183, 184, 185],
				[186, 187, 188, 189, 242, 243, 244],
				[245, 246, 247, 248, 249, 250, 251],
				[252, 253, 270, 271, 272, 273, 274],
				[275, 276, 277, 278, 279, 280, 281],
				[282, 283, 284, 285, 286, 287, 288],
				[289, 290, 291, 292, 293, 294, 295],
				[296, 297, 298, 299, 300, 301, 302],
				[303, 304, 305, 306, 307, 308, 309],
				[310, 311, 312, 313, 314]
			],
			png_list: [],
			gif_list: [],
			nearEmoji: [], //最近使用的表情，最多21个表情
			tabIndex: 0,
			tabbars: [
				// { categoryId: 1, categoryName: '最近使用', current: 1 },
				{ categoryId: 2, categoryName: '糗事', current: 1 }
				// { categoryId: 3, categoryName: '全部表情', current: 0 }
			]
		};
	},
	created() {
		this.png_list = getEmojiPng(this.bq_emoji);
		this.gif_list = getEmojiGif(this.all_emjoi);
		let emoji = uni.getStorageSync('nearEmoji');
		emoji != '' ? (this.nearEmoji = emoji) : (this.nearEmoji = []);
	},
	methods: {
		/* 页签切换事件 */
		handleSwiperChange(e) {
			let index = e.target.current || e.detail.current;
			if (this.tabIndex === index) {
				return;
			}
			this.tabIndex = index;
		},

		/* 导航栏点击事件 */
		handleTabTap(e) {
			this.tabIndex = e.index;
		},

		clickemoji(item, emojiLine = 0, emojiList= []) {
			
			// 设置最近使用表情
			// 判断点击的表情是否在最近使用表情列表中
			let index = this.nearEmoji.indexOf(item);
			if (index != -1) {
				// 最近使用的表情中含有点击的表情
				// 将点击的表情截取出，再将剩余的表情添加至截取后的表情之后
				this.nearEmoji = this.nearEmoji.splice(index, 1).concat(this.nearEmoji.slice(0));
			} else {
				this.nearEmoji.unshift(item);
			}
			if (this.nearEmoji.length >= 22) this.nearEmoji.pop();
			// 将最近使用的表情放在本地中
			uni.setStorageSync('nearEmoji', this.nearEmoji);
			
			this.$emit('clickemoji', item, emojiLine, emojiList);
		}
	}
};
</script>

<style lang="less" scoped>
.emoji {
	box-sizing: border-box;
	position: relative;
	width: calc(750rpx - 20px);
	background-color: #ffffff;
}

.list {
	width: 750rpx;
	height: 100%;
}

.swiper-box {
	flex: 1;
	width: 100%;
	height: calc(100% - 100rpx);
}

text {
	position: relative;
	top: 10px;
	left: 10px;
	// margin-bottom: 10px;
	font-size: 12px;
	color: #ccc;
}
// 表情
.nearEmoji,
.emojiPng,
.emojiGif {
	width: calc(750rpx - 20px);
	view {
		image {
			padding: 20rpx 20rpx;
			width: 60rpx;
			height: 60rpx;
		}
	}
}
</style>
