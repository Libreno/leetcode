/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
	const symbVal = {
		'M': 1000,
		'D': 500,
		'C': 100,
		'L': 50,
		'X': 10,
		'V': 5,
		'I': 1
	}
	let prev = 0;
	let res = 0;
	for (var i = 1; i < s.length; i++){
		if (prev == -1){
			prev = i;
			console.log(s[i] + " skipped")
			continue;
		};
		
		let siVal = parseInt(symbVal[s[i]]);
		let spVal = parseInt(symbVal[s[prev]]);	
		
		if (siVal > spVal){
			let l = siVal - spVal;
			res += l;
			prev = -1;
			console.log(s[i] + ": " + s[i] + " - " + s[prev] + " = " + l + " (" + res + " totally) >");
		}
		else if (siVal < spVal){
			res += spVal;
			prev = i;
			console.log(s[i] + ": " + s[prev] + " = " + spVal + " (" + res + " totally) <");
		}
		else if (siVal == spVal){
			res += spVal;
			prev = i;
			console.log(s[i] + ": " + s[prev] + " = " + spVal + " (" + res + " totally) =");
		}
	}
	if (prev != -1){
		let spVal = parseInt(symbVal[s[prev]]);	
		res += spVal;
		console.log(s[prev] + ": " + s[prev] + " = " + spVal + " (" + res + " totally) after cycle");
	}
	return res;
};