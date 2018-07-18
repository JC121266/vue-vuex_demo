import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
	routes: [
		{
			path: "/",
			name: "login",
			component: () => import("../views/login")
		},
		{
			path: "/home",
			name: "home",
			component: () => import("../views/home")
		},
		{
			path: "/mine",
			name: "mine",
			component: () => import("../views/mine")
		},
		{
			path: "/order",
			name: "order",
			component: () => import("../views/order")
		}
	]
});
