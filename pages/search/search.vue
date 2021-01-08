<template>
	<view class="searchPage"></view>
</template>

<script>
export default {
	data() {
		return {
			searchInfo: ''
		};
	},
	methods: {
		// 监听原生导航栏按钮点击事件
		onNavigationBarButtonTap(e) {
			// 点击取消按钮返回上一级
			if (e.index === 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		/* 监听原生标题栏搜索输入框输入内容变化事件 */
		onNavigationBarSearchInputChanged(e) {
			console.log(e.text);
		},

		/* 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。 */
		onNavigationBarSearchInputConfirmed(e) {
			console.log(e.text);
		},
		/* 监听原生标题栏搜索输入框点击事件 pages.json设置 "disabled": true才生效 */
		onNavigationBarSearchInputClicked(e) {
			console.log(JSON.stringify(e));
		}
	},
	mounted() {
		document.querySelector('.uni-page-head-hd').style.display = 'none';
		document.querySelector('.uni-page-head-ft .uni-btn-icon').style.lineHeight = '18px';
	}
};
</script>

<style lang="scss" scoped></style>
