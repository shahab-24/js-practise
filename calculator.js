function add(a, b){
  const result = a + b
  return result;
}
function subtract(a, b){
  const result = a - b
  return result
}
function multiply(a, b){
  const result = a * b
  return result;
}
function divide(a, b){
  const result = a * b
  return result;
}



function calculator(num1, num2, operation){
  if(operation === 'add'){
    const sum = add(num1, num2)
    return sum;
  }
  else if( operation === 'subtract'){
    const sum = subtract(num1, num2)
    return sum;
  }
  else if(operation === 'multiply'){
    const sum = multiply(num1, num2)
    return sum;
  }
  else if(operation === 'divide'){
    const sum = divide(num1, num2)
    return sum;
  }
  else{
    return 'invalid input';
  }
}

const result = calculator(7, 10, "multiply")
console.log(result);