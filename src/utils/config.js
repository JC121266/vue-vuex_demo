// 分页器配置
export const pageCfg = {
	pageSize: 6,
	pageNum: 1
};
// 编辑器配置
export const cmCfg = {
	tabSize: 4,
	styleActiveLine: true,
	line: true,
	mode: "text/x-sh",
	lineWrapping: true,
	theme: "base16-dark",
	scrollbarStyle: null
};

// console.log(process.env.NODE_ENV === 'development', '----------------------');
// console.log(process.env)
// 日志模块host
// export const socketHost = 'http://10.83.17.58:8084'
export const socketHost = "http://10.83.20.79:8084"; // 测试环境
