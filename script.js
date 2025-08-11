function isSameType(value1, value2) {
  //your js code here
	if(Number(value1)) value1 = Number(value1)
	else if(Number(value2)) value2 = Number(value2)
	return typeof value1 === typeof value2
}

do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
