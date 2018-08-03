import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
// import VueResource from "vue-resource";
// import {ToastPlugin, LoadingPlugin} from "vux";

// Vue.use(LoadingPlugin);
// Vue.use(ToastPlugin);
// Vue.use(VueResource);
// console
// import VConsole from "vconsole";
// const vConsole = new VConsole();
// 300ms 的延迟
FastClick.attach(document.body);
// Vue.config.productionTip = false;

new Vue({
	el: "#app",
	router,
	store,
	components: {
		App
	},
	template: "<App/>"
});

// 自适应
const cssEl = document.createElement("style");
document.documentElement.firstElementChild.appendChild(cssEl);

function setPxPerRem() {
	// const dpr = window.devicePixelRatio;
	const dpr = 1;
	// html标签的font-size设置为1rem的大小,iphone6 font-size设为16 ;
	const pxPerRem = (document.documentElement.clientWidth * dpr) / 23.4375;
	cssEl.innerHTML = "html{font-size:" + pxPerRem + "px!important;}";
}
setPxPerRem();
