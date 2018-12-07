function addTogether(x) {
	//check if first argument isn't a number, if this is the case, return undefined
	if (typeof arguments[0] !== "number") {
		return undefined;
		//check if there's a second argument, and if this is a number, add it to the first argument.
		//otherwise, return undefined
	} else if (arguments.length === 2) {
		return typeof arguments[1] === "number" ? arguments[0] + arguments[1] : undefined;
	} else {
		//curried function for seperate argument
		return y => typeof y === "number" ? x + y : undefined
	};
}

console.log(addTogether(3)(5));