import { formatDistance } from "date-fns";

// https://gist.github.com/kottenator/9d936eb3e4e3c3e02598#gistcomment-2102917
export function pagination(c, m, d = 2) {
	var delta = d,
		range = [],
		rangeWithDots = [],
		l;

	range.push(1);
	for (let i = c - delta; i <= c + delta; i++) {
		if (i < m && i > 1) {
			range.push(i);
		}
	}
	range.push(m);

	for (let i of range) {
		if (l) {
			if (i - l === 2) {
				rangeWithDots.push(l + 1);
			} else if (i - l !== 1) {
				rangeWithDots.push(`...`);
			}
		}
		rangeWithDots.push(i);
		l = i;
	}

	return rangeWithDots;
}

// https://stackoverflow.com/a/52831689
export function chunk(array, size) {
	if (!array.length) {
		return [];
	}
	const head = array.slice(0, size);
	const tail = array.slice(size);

	return [head, ...chunk(tail, size)];
}

export function writeToCache(url, data, time) {
	const now = new Date();
	const item = {
		value: data,
		expiry: now.getTime() + time,
	};
	localStorage.setItem(url, JSON.stringify(item));
}

export function readFromCache(url) {
	const data = localStorage.getItem(url);
	if (!data) {
		return null;
	}
	const item = JSON.parse(data);
	const now = new Date();
	if (now.getTime() > item.expiry) {
		localStorage.removeItem(url);
		return null;
	}
	return item.value;
}

export function timeFromNow(str) {
	return formatDistance(new Date(str), new Date(), {
		addSuffix: true,
	});
}

export function getRandom(arr, n) {
	return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}
