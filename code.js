{
	let input = document.getElementById("input");
	let output = document.getElementById("history");
	let buttons = document.getElementsByClassName("button");

	input.innerHTML = "0";

	const numbers = [];
	const operator = [];

	numbers[1] = document.getElementById("1");
	numbers[2] = document.getElementById("2");
	numbers[3] = document.getElementById("3");
	numbers[4] = document.getElementById("4");
	numbers[5] = document.getElementById("5");
	numbers[6] = document.getElementById("6");
	numbers[7] = document.getElementById("7");
	numbers[8] = document.getElementById("8");
	numbers[9] = document.getElementById("9");
	numbers[0] = document.getElementById("0");

	operator[0] = document.getElementById("divide");
	operator[1] = document.getElementById("x");
	operator[2] = document.getElementById("-");
	operator[3] = document.getElementById("+");

	decimal = document.getElementById(".");

	const clear = document.getElementById("clear");
	const del = document.getElementById("delete");
	const equals = document.getElementById("equals");

	let valueOne = [];
	let valueTwo = [];
	let valueThree = [];
	let currentValue = [valueOne];
	let valuePlaceholder = 0;
	let operSelection;
	let historyHTML;
	let history = 0;
	var valueHTML;
	var total;

	clear.addEventListener('click', function clearAll () {
		input.innerHTML = "";
		output.innerHTML = "";
		currentValue = [];
		valueOne = [];
		valueTwo = [];
		valueThree = [];
		historyHTML = "";
		operSelection = undefined;
	});

	del.addEventListener('click', function () {
		if (currentValue.length > 0) {
			currentValue.pop();
			input.innerHTML = currentValue.join("");
			console.log(currentValue[0]);
		}
	});

	function value (valuePlaceholder) {
		if (valuePlaceholder == 0) {
			if (valueOne.length > 0) {
				history += valueOne;
				valueOne = [];
			}
			currentValue = valueOne;
		}
		else if (valuePlaceholder == 1) {
			if (valueTwo.length >= 1) {
				history += valueTwo;
				valueTwo = [];
			}
			currentValue = valueTwo;
		}
		else if (valuePlaceholder == 2) {
			if (valueThree.length >= 1) {
				history += valueThree;
				valueThree = [];
			}
			currentValue = valueThree;
		}
		console.log ("history = " + history);
		console.log("value placeholder " + valuePlaceholder);
	}

	for (let i = 0; i < numbers.length; i++) {
		numbers[i].addEventListener('click', function () {
			if (currentValue[0] == 0) {
				currentValue.pop();
			}
			currentValue.push(i);
			console.log(currentValue);
			valueHTML = currentValue.join("");
			input.innerHTML = valueHTML;
			if (operSelection != undefined) {
				output.innerHTML = historyHTML + " " + operSelection;
				history += currentValue;
			}
		});
	}

	j = 0;
	for (let i = 0; i < operator.length; i++) {
		operator[i].addEventListener('click', function () {
			switch (i) {
				case 0:
				operSelection = "&#247";
				break;
				case 1:
				operSelection = "*";
				break;
				case 2:
				operSelection = "-";
				break;
				case 3:
				operSelection = "+";
				break;
			}
			input.innerHTML = operSelection;
			history += currentValue;
			historyHTML = valueHTML;
			output.innerHTML = historyHTML;
			if (j > 2) { j = 0 };
			value(j++);
			console.log(currentValue);
		});
	}

	equals.addEventListener('click', function () {
		if (operSelection == "&#247") {
			total = parseFloat(historyHTML) / parseFloat(valueHTML);
			console.log(operSelection);
		}
		input.innerHTML = total;
		console.log(parseInt(historyHTML) + "///" + history + "///" + parseInt(valueHTML) + "///");
	});






	/*let valueOne = [];
	var operSelection = 0;
	let valueTwo = [];
	let total;
	let equalsClicked = false;

	for (let i = 0; i < numbers.length; i++) {
		numbers[i].addEventListener('click', function () {
			if (equalsClicked == true) {
				if (history == undefined) {
					output.innerHTML == "";
				}
				else {
					output.innerHTML = history + " = " + total;
				}
				valueOne.push(i);
				console.log(valueOne);
				input.innerHTML = valueOne.join("");
				if (valueOne[0] == 0) {
					valueOne.pop();
				}
				equalsClicked = false;
			}
			else if (operSelection != 0 && equalsClicked == false) {
				valueTwo.push(i);
				console.log(valueTwo);
				output.innerHTML = valueOne.join("") + " " + operSelection;
				input.innerHTML = valueTwo.join("");
			}
		});
	}

	for (let i = 0; i < operator.length; i++) {
		operator[i].addEventListener('click', function () {
			switch (i) {
				case 0:
				operSelection = "&#247";
				break;
				case 1:
				operSelection = "*";
				break;
				case 2:
				operSelection = "-";
				break;
				case 3:
				operSelection = "+";
				break;
			}
			input.innerHTML = operSelection;
			output.innerHTML = valueOne.join("");
			console.log(operSelection);
		});
	}

	let history;

	equals.addEventListener('click', function () {
		if (operSelection == "&#247") {
			total = Number(valueOne.join("")) / Number(valueTwo.join(""));
		}
		else if (operSelection == "*") {
			total = Number(valueOne.join("")) * Number(valueTwo.join(""));
		}
		else if (operSelection == "-") {
			total = Number(valueOne.join("")) - Number(valueTwo.join(""));
		}
		else if (operSelection == "+") {
			total = Number(valueOne.join("")) + Number(valueTwo.join(""));
		}
		input.innerHTML = total;
		history = valueOne.join("") + " " + operSelection + " " + valueTwo.join("");
		output.innerHTML = history;
		valueOne = [];
		valueTwo = [];
		equalsClicked = true;
		operSelection = 0;
		 
	});*/








}