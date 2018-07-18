<template>
<div class="login">
	{{getName}}
	<button type="button" name="button" @click="updateName">更新</button>
</div>
</template>

<script>
// import store from '../store'
export default {
	computed: {
		getName() {
			// alert(99999999999)
			return this.$store.getters.getReverseName
		}

	},
	methods: {
		updateName() {
			// this.$store.commit('updateName')
			this.$store.dispatch('updateNameAsync')
		}
	}
}
</script>

<style lang="less">
</style>
