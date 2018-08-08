import http from "@/utils/http";
const mApi = "/api/manager";
const cApi = "/api/container";

// 删除操作统一将id放到api后,即api/id
export const page = async params => http.post("/api/repo/page", params);

export const list = async params => http.post("/api/repo/list", params);

// 首页数据
export const getHomeData = async params =>
	http.post(`${mApi}/admin/index`, params);

// 全局信息
export const globalInfo = async params =>
	http.post(`${mApi}/admin/indexTitle`, params);

// 容器管理
export const container = {
	page: async params => http.post(`${mApi}/container/page`, params),
	detail: async params => http.post(`${cApi}/k8sapi/container/read`, params)
};
