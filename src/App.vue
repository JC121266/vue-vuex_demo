<template>
<div id="app">
	<transition name="fade" mode="out-in">
		<keep-alive>
			<router-view v-if="!!$route.meta.keepAlive"></router-view>
		</keep-alive>
	</transition>
</div>
</template>

<script>
import {
	mapGetters
} from 'vuex'

export default {
	name: "App",
	components: {},
	computed: {
		// ...mapGetters(['isLoading'])
	}
};
</script>

<style lang="less">
body,
html {
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Helvetica Neue", STHeiti, "Microsoft Yahei" sans-serif;
    background-color: #f8f8f8;
    // height: 100vh;
    font-size: 16px;
    margin: 0;
}

* {
    box-sizing: border-box;
}
</style>
