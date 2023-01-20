const maskCreditCard = (number) => {
	const str = number + "";
	const last = str.slice(-4);

	return last.padStart(str.length, "*");
};

console.log(maskCreditCard(3213232144));

const capitalizeName = (name) => {
	const names = name.split(" ");
	const namesUpper = [];
	for (const n of names) {
		// namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
		namesUpper.push(n[0].toUpperCase() + n.slice(1));
	}

	console.log(namesUpper.join(" "));
};

capitalizeName("ngo yen thanh");
