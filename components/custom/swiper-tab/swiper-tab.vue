<template>
	<view>
		<scroll-view
			scroll-x="true"
			:style="'background-color:' + bgc + ';top:' + top + 'px;'"
			:class="fixed ? 'fxied' : ''"
			:scroll-left="scrollLeft"
			scroll-with-animation
			id="tabcard"
		>
			<view class="tabList" :style="isEqually ? 'display: flex;justify-content: space-between;padding-left:0;' : ''">
				<view
					:class="'tabItem' + (currentIndex == index ? ' thisOpenSelect' : '')"
					:style="isEqually ? 'width:' + windowWidth / tempList.length + 'px;margin-right:0;' : ''"
					v-for="(item, index) in tempList"
					:id="'item' + index"
					:key="index"
					@click="_onClick(index)"
				>
					<text style="font-weight: bold;" :style="currentIndex == index ? 'font-size:' + activeSize + 'rpx;color:' + activeColor : 'font-size:' + itemSize + 'rpx'">{{
						item.name
					}}</text>
					<!-- 底部横线 -->
				</view>
				<view class="downLine" :style="activeLineStyle" ></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	name: 'swiperTab',
	props: {
		current: {
			type: Number,
			default: 0
		},
		items: {
			type: Array,
			default() {
				return [];
			}
		},
		bgc: {
			type: String,
			default: '#fffff'
		},
		fixed: {
			type: Boolean,
			default: false
		},
		scrollFlag: {
			type: Boolean,
			default: false
		},
		
		itemSize: {
			type: Number,
			default: 30
		},
		activeSize: {
			type: Number,
			default: 32
		},
		activeColor: {
			type: String,
			default: ''
		},
		top: {
			type: Number,
			default: 0
		},
		isEqually: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			activeLineStyle: {},
			tempList: this.items,
			currentIndex: 0,
			windowWidth: 0, //设备宽度
			leftList: [], //选项距离左边的距离
			widthList: [], //选项宽度
			scrollLeft: 0, //移动距离
			newScroll: 0, //上一次移动距离(用来判断是左滑还是右滑)
			wornScroll: 0 //上一次移动距离(用来判断是左滑还是右滑)
		};
	},
	mounted() {
		setTimeout(() => {
			uni
				.createSelectorQuery()
				.in(this)
				.select('#tabcard')
				.boundingClientRect(res => {
					this.$emit('getTabCardHeight', { height: res.height });
				})
				.exec();
			uni.getSystemInfo({
				success: res => {
					this.windowWidth = res.windowWidth;
					this.tempList.forEach((i, v) => {
						
						let tabLeft = 0;
						let info = uni.createSelectorQuery().in(this);
						
						/* 获取tabList距离左边的位置 */
						info.select('.tabList').boundingClientRect(res => {tabLeft = res.left;}).exec();
						info
							.select('#item' + v)
							.boundingClientRect(res => {
								// 获取第一个元素到左边的距离
								// if(v==0){
								// 	this.startLenght = res.left
								// }
								this.widthList.push(res.width);
								this.leftList.push(res.left - tabLeft);
							})
							.exec();
					});
				}
			});
			this.setActiveLineStyle();
		});
		
	},
	created() {
		this.currentIndex = this.current;
		
		if (this.scrollFlag) {
			setTimeout(() => {
				this.tabListScroll(this.current);
			}, 300);
		}
	},
	watch: {
		current(val) {
			if (val !== this.currentIndex) {
				this.currentIndex = val;
				this.setActiveLineStyle();
				if (this.scrollFlag) {
					this.tabListScroll(val);
				}
			}
		}
	},
	methods: {
		/* 设置下边横线的位置 */
		setActiveLineStyle() {
			let left = this.leftList[this.currentIndex] +10;  // 最左边的padding-left要加10px
			let width = this.widthList[this.currentIndex]-20; // 减去每个item的padding宽度
			let lineLeft = left + 'px';
			let lineWidth = width + 'px';
			
			this.activeLineStyle = {
				left:lineLeft,
				width:lineWidth
			}
			
			/* console.log('this.currentIndex', this.currentIndex);
			console.log('this.leftList', this.leftList);
			console.log('this.widthList', this.widthList); */
		},
		_onClick(index) {
			if (this.currentIndex !== index) {
				this.currentIndex = index;
				this.setActiveLineStyle();
				this.$emit('clickItem', { currentIndex: index });
				// 开启滚动
				if (this.scrollFlag) {
					this.tabListScroll(index);
				}
			}
		},
		// 选项移动
		tabListScroll(index) {
			let scoll = 0;
			this.wornScroll = index;
			// this.wornScroll-this.newScroll>0 在向左滑  ←←←←←
			if (this.wornScroll - this.newScroll > 0) {
				for (let i = 0; i < this.leftList.length; i++) {
					if (i > 1 && i == this.currentIndex) {
						scoll = this.leftList[i - 1];
					}
				}
				// console.log('在向左滑',scoll)
			} else {
				if (index > 1) {
					for (let i = 0; i < this.leftList.length; i++) {
						if (i < index - 1) {
							scoll = this.leftList[i];
						}
					}
				} else {
					scoll = 0;
				}
				// console.log('在向右滑')
			}
			this.newScroll = this.wornScroll;
			this.scrollLeft = scoll;
		}
	}
};
</script>

<style lang="less" scoped>
.fxied {
	position: fixed;
	z-index: 2;
}
.tabList {
	padding: 24rpx 0 ;
	white-space: nowrap;
	text-align: left;
	position: relative;
	align-items: center;
	.tabItem {
		padding: 0 20rpx;
		display: inline-block;
		text {
			// font-size: 30rpx;
			position: relative;
			line-height: 44rpx;
			color: var(--bColor);
			transition: all 0.3s ease 0s;
			z-index: 999;
		}
	}
	.tabItem:first-child {
		// margin-left: 22rpx;
	}
	.tabItem:last-child {
		margin-right: 24rpx;
	}
	.thisOpenSelect {
		text {
			color: #333;
			font-weight: 600;
			// font-size: 32rpx;
		}
	}
}

.downLine {
		position: absolute;
		top: 68rpx;
		height: 8rpx;
		border-radius: 12rpx;
		background-color: var(--color);
		transition: all 0.3s ease 0s;
		z-index: 98;
	}


</style>
