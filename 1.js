function addTogether(x) {
	if (typeof arguments[0] !== "number") {
		return undefined;
	} else if (arguments.length > 1 ) {
		return typeof arguments[1] === "number" ? arguments[0] + arguments[1] : undefined;
	}
	return function sumTwo(y) {
		return typeof y === "number" ? x + y : undefined;
	};
}

console.log(addTogether("http://bit.ly/IqT6zt"));