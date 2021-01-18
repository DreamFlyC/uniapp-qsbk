<template>
	<text class="iconfont" :class="[iconName,iconColor]" :style="{fontSize:`${iconSize}rpx`}"></text>
</template>

<script>
	export default {
		props: {
			iconName: {
				type: String,
				default: ""
			},
			iconColor: {
				type: String,
				default: "#333333",
			},
			iconSize: {
				type: [String, Number],
				default: 28
			}
		},


	}
</script>

<style>
</style>
