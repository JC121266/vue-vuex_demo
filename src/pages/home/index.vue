<style lang="less" scoped>
.home {}
</style>

<template>
<div class="home">
	this is home
</div>
</template>

<script>
export default {
	name: "home",
	components: {},
	computed: {},
	data() {
		return {}
	},
	mounted() {
		console.log(this.$route);
	},
	methods: {}
}
</script>
