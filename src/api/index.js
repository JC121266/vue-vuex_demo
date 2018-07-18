import Axios from "axios";
import {baseURL} from "./url";
const instance = Axios.create({
	baseURL: baseURL,
	timeout: 10000
});
//请求拦截器
instance.interceptors.request.use();
//响应拦截器
instance.interceptors.response.use(({data, status, statusText}) => {
	if (status === 200 || status === 304) {
		return data;
	}
	return {
		code: -404,
		message: statusText,
		data: statusText
	};
});
export default {
	install: vue => {
		vue.prototype.$http = instance;
	}
};
