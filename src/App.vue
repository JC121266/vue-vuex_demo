<template>
<div id="app">
	<!-- 需要缓存的组件，即跳转到该页面时不刷新 -->
	<transition name="fade" mode="out-in">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
	</transition>

	<!-- 不需要缓存的组件，即跳转到该页面时刷新  -->
	<transition name="fade" mode="out-in">
		<keep-alive>
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</keep-alive>
	</transition>

	<!-- 显示tabbar -->
	<tabbar v-show="!!$route.meta.showTab">
		<tabbar-item :selected="$route.path=='/home'" link='/home'>
			<!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
			<!-- <img slot="icon-active" src="../assets/demo/icon_nav_msg.png"> -->
			<span slot="label">首页</span>
		</tabbar-item>
		<tabbar-item :selected="$route.path=='/order'" link="/order">
			<!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
			<!-- <img slot="icon-active" src="../assets/demo/icon_nav_msg.png"> -->
			<span slot="label">订单</span>
		</tabbar-item>
		<tabbar-item :selected="$route.path=='/mine'" link="/mine">
			<!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
			<!-- <img slot="icon-active" src="../assets/demo/icon_nav_msg.png"> -->
			<span slot="label">我的</span>
		</tabbar-item>
	</tabbar>
</div>
</template>

<script>
import {
	Tabbar,
	TabbarItem
} from 'vux'

export default {
	name: "App",
	components: {
		Tabbar,
		TabbarItem
	}
};
</script>

<style lang="less">
body,
html {
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, "Helvetica Neue", STHeiti, "Microsoft Yahei" sans-serif;
    background-color: #f8f8f8;
    height: 100vh;
    font-size: 16px;
    margin: 0;
}

* {
    box-sizing: border-box;
}
.weui-tabbar__label {
    line-height: 1.8!important;
}
</style>
