function isSameType(value1, value2) {
  //your js code here
	value1.trim();value2.trim();
	if(value1==="NaN" && value2==="NaN") return true;
	else if(typeof parseFloat(value1) === typeof parseFloat(value2)) return true;
	else if(typeof value1 === typeof value2) return true;
	else return false
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
