function isSameType(value1, value2) {
  //your js code here
	value1 = value1.trim();
	value2 = value2.trim();
	
	const num1 = parseFloat(value1)
	const num2 = parseFloat(value2)
	const isNum1NaN = isNaN(num1)
	const isNum2NaN = isNaN(num2)
	
	if(value1 === "NaN" && value2 === "NaN") return true;
	else if (value1 === "NaN" || value2 === "NaN") return false;
	else if (isNum1NaN && isNum2NaN) return true; // thats implies they are strings
	else if ( (isNum1NaN && num2 === "number") || (isNum2NaN && n1=== "number") ) return false;
	else if (typeof num1 === "number" && typeof num2 === "number") return true;
	else return false
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));