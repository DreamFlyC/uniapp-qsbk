<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar class="nav-bar" :status-bar="true" :border="false" :fixed="true">
			<!-- 左侧导航栏按钮 -->
			<block slot="left">
				<view class="left-view" @tap="onClickLeft"> <view class="icon iconfont icon-qiandao"></view> </view>
			</block>
			<view class="center-view">
				<slot></slot>
			</view>
			<!-- 右侧导航栏按钮 -->
			<block slot="right">
				<view class="right-view" @tap="onClickRight"> <view class="icon iconfont icon-33"></view> </view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	export default{
		data() {
			return {
			}
		},
		methods:{
			onClickLeft(){
				this.$emit('clickLeft')
			},
			onClickRight(){
				this.$emit('clickRight')
			}
		}
		
	}
	
</script>

<style lang="scss" scoped>
	.nav-bar {
		/* 中间导航栏按钮 */
		.center-view {
			flex: 1;
		}
	
		/* 左侧导航栏按钮 */
		.left-view {
			/* 图标样式 */
			.icon-qiandao {
				font-size: 44rpx;
				color: var(--color);
			}
		}
	
		/* 右侧导航栏按钮 */
		.right-view {
			/* 图标样式 */
			.icon-33 {
				font-size: 40rpx;
				color: #000000;
			}
		}
	}
</style>
