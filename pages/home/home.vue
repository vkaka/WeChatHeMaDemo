<template>
	<view>
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图的数据列表，默认为空
				swiperList: [],

			};
		},
		onLoad() {
			this.getSwiperList()
		},
		methods: {
			async getSwiperList() {
				const res = await uni.$http.get('/api/public/v1/home/swiperdata')
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">

</style>