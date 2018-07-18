<template>
<div id="app">
	<router-view></router-view>
	<!-- <div class="">
		this is again
	</div> -->
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
    height: 100%;
    font-size: 15px;
}

* {
    box-sizing: border-box;
}
</style>
