let roman = {
	i: 1,
	v: 5,
	x: 10,
	l: 50,
	c: 100,
	d: 500,
	m: 1000
}



export default function getValue(inputString){
    let numberArray = inputString.toLowerCase().split("").map((character) => {
        return roman[character];
    });

    if(!isValid(numberArray)){
        return "Invalid Value"
    }

    let result = compute(numberArray);

    if(result === false){
        return "Invalid Value"
    }else{
        return result;
    }
}



function isValid(array){
	let h = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i] === undefined){
			return false;
		}
		if(array[i] === array[i+1]){
			h++;
		}else{
			h = 0;
		}
		if(h === 1){
			if(has5(array[i])){
				return false;
			}
		}
		if(h === 3){
			return false;
		}
	}
	return true
}

function has5(num){
	return num.toString().includes('5');
}

function compute(array){
	let result = 0;
	let j;
	for(let i = array.length - 1; i >= 0; i--){
		j = i - 1;
		if(array[i] > array[j]){
			let num = array[j] / array[i];
			if(num === 0.1 || num === 0.20){
				result += evaluate(array[j], array[i]);
				let previous = i + 1;
				let test = array[previous] / result;
				if(test >= 0.1 || test >= 0.2){
					return false;
				}
				i--;
			}else{
				return false;
			}
		}else{
			result += array[i]
		}	 
	}
	return result;
}

function evaluate(a, b){
	return b - a;
}