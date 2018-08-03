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

//remove all sesstionstorage
export function removeAllSessionStorage() {
	for (let item in sessionStorage) {
		sessionStorage.removeItem(item);
	}
	// sessionStorage.clear()
}
