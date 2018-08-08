const password = (rule, value, callback) => {
	if (value === "") {
		callback(new Error("密码不能为空！"));
	} else if (value !== this.addForm.pass) {
		callback(new Error("两次输入密码不一致!"));
	} else {
		callback();
	}
};
export default {
	password
};
