import moment from "moment";

// Operation LocalStorage
export function setSessionStorage(key, vaule) {
	return sessionStorage.setItem(key, JSON.stringify(vaule));
}

export function getSessionStorage(key) {
	return JSON.parse(sessionStorage.getItem(key));
}

export function removeSessionStorage(key) {
	return sessionStorage.removeItem(key);
}

// remove all sesstionstorage
export function removeAllSessionStorage() {
	for (let item in sessionStorage) {
		sessionStorage.removeItem(item);
	}
}

/**
 * 合同时间转换
 * @param {*开始时间} startDate
 * @param {*结束时间} endDate
 * @param {*时间间隔} disDate
 */
export function validTime(startDate, endDate, disDate = 7) {
	if (
		(startDate !== undefined || endDate !== undefined) &&
		(startDate === undefined || endDate === undefined)
	) {
		// 单个时间出现
		return 1;
	}
	if (startDate !== undefined && endDate !== undefined) {
		// 成对时间出现校验时间差
		let dis = dicDate(endDate, startDate); // 两个时间相差天数
		if (dis > disDate) {
			return 3;
		} else if (dis < 0) {
			return -1;
		} else {
			return 2;
		}
	}
	if (startDate === undefined && endDate === undefined) {
		// 两个时间都没有选择
		return 0;
	}
}

// 去除前后空格
export function trim(str) {
	return str.replace(/(^\s+)|(\s+$)/, "");
}

// 获取url中的参数
export function getQueryString(name) {
	let reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i");
	let r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

export function convertDate(date) {
	let d = moment(date).format("YYYY-MM-DD");
	return d === "Invalid date" ? undefined : d;
}

function dicDate(date1, date2) {
	return (
		(moment(date1).format("X") - moment(date2).format("X")) / 60 / 60 / 24
	);
}

export function sFormat(date) {
	return `${moment(date).format("YYYY-MM-DD")} 00:00:00`;
}

export function eFormat(date) {
	return `${moment(date).format("YYYY-MM-DD")} 23:59:59`;
}

// 延时函数
export const sleep = function(time = 3000) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve();
		}, time);
	});
};
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
