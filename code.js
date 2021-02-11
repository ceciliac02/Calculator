{
	let input = document.getElementById("input");
	let output = document.getElementById("history");
	let buttons = document.getElementsByClassName("button");

	input.innerHTML = "";

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

	const decimal = document.getElementById(".");

	const clear = document.getElementById("clear");
	const del = document.getElementById("delete");
	const equals = document.getElementById("equals");

	let firstOperand = [];
	let secondOperand = [];
	let operatorSelection = undefined;
	let operatorSelected = false;
	let total;

	function displayInput (userInput, userHistory) {
		input.innerHTML = userInput;
		output.innerHTML = userHistory;
	}

	clear.addEventListener('click', function () {
		displayInput(0, 0)
		firstOperand = [];
		secondOperand = [];
		total = 0;
		operatorSelection = undefined;
		operatorSelected = false;
	});

	del.addEventListener('click', function () {
		if (operatorSelected == false) {
			firstOperand.pop();
			displayInput(firstOperand.join(""), 0);
		}
		else {
			secondOperand.pop();
		}
	});

	for (let i = 0; i < operator.length; i++) {
		operator[i].addEventListener('click', function() {
			switch (i) {
				case 0:
				operatorSelection = "&#247";
				break;
				case 1:
				operatorSelection = "*";
				break;
				case 2:
				operatorSelection = "-";
				break;
				case 3: 
				operatorSelection = "+";
				break;
			}
			displayInput(operatorSelection, firstOperand.join(""));
			operatorSelected = true;
		});
	}

	decimal.addEventListener('click', function () {
		if (operatorSelected == false && firstOperand.includes(".") == false) {
			firstOperand.push(".");
			displayInput(firstOperand.join(""), 0);
		}
		else if (operatorSelected == true && secondOperand.includes(".") == false) {
			secondOperand.push(".");
			displayInput(secondOperand.join(""), firstOperand.join("") + " " + operatorSelection);
		}
	});

	for (let i = 0; i < numbers.length; i++) {
		numbers[i].addEventListener('click', function () {
			if (operatorSelected == false) {
				if (firstOperand[0] == 0) {
					firstOperand.pop();
				}
				firstOperand.push(i);
				displayInput(firstOperand.join(""), 0, undefined);
				console.log(firstOperand);
			}
			else {
				if (secondOperand[0] == 0) {
					secondOperand.pop();
				}
				secondOperand.push(i);
				displayInput(secondOperand.join(""), firstOperand.join("") + " " + operatorSelection);
			}
		});
	}

	equals.addEventListener('click', function () {
		firstOperand = Number(firstOperand.join(""));
		secondOperand = Number(secondOperand.join(""))
		if (operatorSelection == "&#247") {
			total = firstOperand / secondOperand;
		}
		else if (operatorSelection == "*") {
			total = firstOperand * secondOperand;
		}
		else if (operatorSelection == "-") {
			total = firstOperand - secondOperand;
		}
		else if (operatorSelection == "+") {
			total = firstOperand + secondOperand;
		}
		displayInput(total, firstOperand + " " + operatorSelection + " " + secondOperand);
	});

	/*
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
	
	//Clear
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

	//Delete
	del.addEventListener('click', function () {
		if (currentValue.length > 0) {
			currentValue.pop();
			input.innerHTML = currentValue.join("");
			console.log(currentValue[0]);
		}
	});

	decimal.addEventListener('click', function () {
		if (currentValue.includes(".") == false) {
			currentValue += ".";
			input.innerHTML = "";
		}
	});

	//changes the current value array and appends it to the history
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

	//Number buttons are clicked and added to the current value array
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
				output.innerHTML += " " + historyHTML + " ";
				history += currentValue;
				total = equalsFunction(historyHTML, valueHTML, operSelection)
				console.log(total);
			}
		});
	}

	//Changes the valuePlaceholder in the value function
	j = 0;
	//Defines the operator
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
			output.innerHTML += operSelection;
			if (j > 2) { j = 0 };
			value(j++);
			console.log(currentValue);
		});
	}

	//Takes the previous input and the current value and executes the expression
	equals.addEventListener('click', equalsFunction);

	function equalsFunction (firstOperand, secondOperand, operator) {
		if (operSelection == "&#247") {
			total = parseFloat(historyHTML) / parseFloat(valueHTML);
			console.log(operSelection);
		}
		else if (operSelection == "*") {
			total = parseFloat(historyHTML) * parseFloat(valueHTML);
		}
		else if (operSelection == "-") {
			total = parseFloat(historyHTML) - parseFloat(valueHTML);
		}
		else if (operSelection == "+") {
			total = parseFloat(historyHTML) + parseFloat(valueHTML);
		}
		else {
			total = "";
			historyHTML = "";
			valueHTML = "";
			operSelection = "";
		}
		input.innerHTML = total;
		output.innerHTML = historyHTML + " " + operSelection + " " + valueHTML;
		console.log(parseInt(historyHTML) + "///" + history + "///" + parseInt(valueHTML) + "///");
		return total;
	}*/




	






}