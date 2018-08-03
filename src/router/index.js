import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
	routes: [
		// =====================登录==============================
		// 手机号码登录
		{
			path: "/",
			name: "phoneLogin",
			component: r =>
				require.ensure(
					[],
					() => r(require("../pages/login/phoneLogin")),
					"phoneLogin"
				),
			meta: {keepAlive: true, showTab: false}
		},
		// 密码登录
		{
			path: "/pwdLogin",
			name: "pwdLogin",
			component: r =>
				require.ensure(
					[],
					() => r(require("../pages/login/pwdLogin")),
					"pwdLogin"
				),
			meta: {keepAlive: true, showTab: false}
		},
		// 忘记密码
		{
			path: "/forgetPwd",
			name: "forgetPwd",
			component: r =>
				require.ensure(
					[],
					() => r(require("../pages/login/forgetPwd")),
					"forgetPwd"
				),
			meta: {keepAlive: true, showTab: false}
		},
		// 注册
		{
			path: "/register",
			name: "register",
			component: r =>
				require.ensure(
					[],
					() => r(require("../pages/login/register")),
					"register"
				),
			meta: {keepAlive: true, showTab: false}
		},
		// =====================首页==============================
		{
			path: "/home",
			name: "home",
			component: r =>
				require.ensure([], () => r(require("../pages/home")), "home"),
			meta: {keepAlive: true, showTab: true}
		},
		// =====================我的==============================
		{
			path: "/mine",
			name: "mine",
			component: r =>
				require.ensure([], () => r(require("../pages/mine")), "mine"),
			meta: {keepAlive: false, showTab: true}
		},
		// =====================订单==============================
		{
			path: "/order",
			name: "order",
			component: r =>
				require.ensure([], () => r(require("../pages/order")), "order"),
			meta: {keepAlive: false, showTab: true}
		}
	],
	beforeRouteLeave(to, from, next) {
		if (to.path == "home") {
			to.meta.keepAlive = true;
		} else {
			to.meta.keepAlive = true;
		}
		next();
	},
	//路由切换时页面如何滚动
	scrollBehavior(to, from, savedPosition) {
		return {x: 0, y: 0};
	}
});
