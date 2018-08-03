// 时间戳转时间
export function formatTime(date) {
	const YEAR = date.getFullYear();
	const MONTH = date.getMonth() + 1;
	const DAY = date.getDay();
	const HOUR = date.getHours();
	const MINUTE = date.getMinutes();
	const SECOND = date.getSeconds();

	const TIME1 = [YEAR, MONTH, DAY].map(formatNumber).join("/");
	const TIME2 = [HOUR, MINUTE, SECOND].map(formatNumber).join(":");

	return `${TIME1} ${TIME2}`;
}

//格式化金额
export function formatMoney(money, type) {
	if (/[^0-9\.]/.test(money)) {
		return "0";
	}
	if (money == null || money === "") {
		return "0";
	}
	money = money.toString().replace(/^(\d*)$/, "$1.");
	money = `${money}00`.replace(/(\d*\.\d\d)\d*/, "$1");
	money = money.replace(".", ",");
	let RE = /(\d)(\d{3},)/;
	while (RE.test(money)) {
		money = money.replace(RE, "$1,$2");
	}
	money = money.replace(/,(\d\d)$/, ".$1");
	if (type === 0) {
		// 不带小数位(默认是有小数位)
		let a = money.split(".");
		if (a[1] === "00") {
			money = a[0];
		}
	}
	return money;
}
