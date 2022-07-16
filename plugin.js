console.log("Youtube Date Converter");

const month = {
	jan: 1,
	feb: 2,
	mar: 3,
	apr: 4,
	may: 5,
	jun: 6,
	jul: 7,
	aug: 8,
	sep: 9,
	oct: 10,
	nov: 11,
	dec: 12,
};

setInterval(() => {
	let newDateString = "";
	const dateObject = document.getElementById("info-strings").children[1];

	newDateString += dateObject.innerHTML.split(" ")[1].replace(",", "");           // Day
	newDateString += ".";
	newDateString += month[dateObject.innerHTML.split(" ")[0].toLocaleLowerCase()]; // Month (Number)
	newDateString += ".";
	newDateString += dateObject.innerHTML.split(" ")[2];                            // Year

	dateObject.innerHTML = newDateString;
}, 500);
