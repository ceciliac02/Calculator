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

	let clear = document.getElementById("clear");
	let del = document.getElementById("delete");
	let equals = document.getElementById("equals");

	let valueOne = [];
	var operSelection = 0;
	let valueTwo = [];
	let total;

	for (let i = 0; i < numbers.length; i++) {
		numbers[i].addEventListener('click', function () {
			if (operSelection === 0 || equalsClicked == true) {
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
			}
			else if (operSelection != 0) {
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

	let equalsClicked = false;
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
		equalsClicked = true;
		 
	});








}