<style lang="less" scoped>
.order {}
</style>
<template>
<div class="order">
	this is order
</div>
</template>

<script>
export default {
	name: "order",
	components: {},
	computed: {},
	data() {
		return {}
	},
	mounted() {
		alert(123)
		console.log(this.$route, '---------');
	},
	methods: {}
}
</script>
