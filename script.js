function isSameType(value1, value2) {
  //your js code here
	value1.trim();value2.trim();
	if(value1==="NaN" && value2==="NaN") return true;
	else if((value1 !== "NaN" && value2 !== "NaN"){
		if(typeof parseFloat(value1) !== number && typeof parseFloat(value2) !== number) {
			return true
		}
		else return true
	}
	else return false
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
