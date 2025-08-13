export const add = (list) => {
	let total = 0;
	list.forEach((element) => {
		let number = parseInt(element);
		if (!isNaN(number)) {
			if (number < 0) {
				throw new Error("Negative value not allowed");
			} else {
				total += number;
			}
		} else {
			throw new Error("Specail character not allowed");
		}
	});
	return total;
};
