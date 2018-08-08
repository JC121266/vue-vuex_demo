import axios from "axios";
import QS from "qs";
import store from "../store/index";

// 环境的切换
if (process.env.NODE_ENV == "development") {
	axios.defaults.baseURL = "https://www.baidu.com";
} else if (process.env.NODE_ENV == "debug") {
	axios.defaults.baseURL = "https://www.ceshi.com";
} else if (process.env.NODE_ENV == "production") {
	axios.defaults.baseURL = "https://www.production.com";
}
//post请求头的设置
axios.defaults.timeout = 10000;
//post请求头的设置
axios.defaults.headers.post["Content-Type"] =
	"application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
	config => {
		// 每次发送请求之前判断vuex中是否存在token
		// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
		const token = store.state.token;
		token && (config.headers.Authorization = token);
		return config;
	},
	error => {
		return Promise.error(error);
	}
);
