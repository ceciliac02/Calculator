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
	let currentValue = [];
	let valuePlaceholder = 0;
	let history;
	var valueHTML;

	clear.addEventListener('click', function clearAll () {
		input.innerHTML = "";
		output.innerHTML = "";
		valueOne = [];
		valueTwo = [];
		valueThree = [];
		console.log("clear complete");
	});

	del.addEventListener('click', function del () {
		if (currentValue[0].length > 0) {
			currentValue[0].pop();
			console.log(currentValue[0]);
		}
	});

	function value (valuePlaceholder) {
		if (valuePlaceholder == 0) {
			currentValue = valueOne;
			if (valueOne.length >= 1) {
				history += valueOne;
				valueOne = [];
			}
		}
		else if (valuePlaceholder == 1) {
			currentValue = valueTwo;
			if (valueTwo.length >= 1) {
				history += valueTwo;
				valueTwo = [];
			}
		}
		else {
			currentValue = valueThree;
			if (valueThree.length >= 1) {
				history += valueThree;
				valueThree = [];
			}
		}
	}

	i = 0;
	function changeValue (i) {
		value(i);
		console.log(i);
		console.log(currentValue);
	}

	for (let i = 0; i < numbers.length; i++) {
		numbers[i].addEventListener('click', function () {
			currentValue.push(i);
			console.log(currentValue);
			valueHTML = currentValue.join("");
			input.innerHTML = valueHTML;
		});
	}

	let j = 0;
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
			output.innerHTML = valueHTML;
			changeValue(j++);
			console.log(currentValue);
		});
	}



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