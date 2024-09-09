
const names = ['akib', 'sakib', 'tahmid', 'noor', 'inzamam']



function maxWords(numbers) {

  let max = ''
  for(const num of numbers){

    if(num.length > max.length){
      max = num;
    }
  }
  return max;

}

const max2 = maxWords(names)
// console.log('longest words is:',max2);





const weights = [25, 136, 56, 42, 87, 96]
function maxNumber(numbers) {
  let max = numbers[0]

  for(const num of numbers){
    if(num > max){
      max = num;
      
    }
  }
  return max;

}

const maxNum = maxNumber(weights);
// console.log('highest weight is:', maxNum);

function minNum(arr){
  let min = arr[0];

  for(const item of arr){
    if(item <  min){
      min = item;
    }
  }
  return min;

}

const min = minNum(weights)
// console.log('min number is:',min);


function countPrice(shirtQuantity, pantQuantity, shoeQuantity){

const shirtPrice = 500;
const pantPrice = 700;
const shoePrice = 900;

const shirtTotalPrice = shirtPrice * shirtQuantity;
const pantTotalPrice = pantPrice * pantQuantity;
const shoeTotalPrice = shoePrice * shoeQuantity;

const totalPayment = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

console.log( shirtTotalPrice, pantTotalPrice, shoeTotalPrice );
return (totalPayment)

}




const result = countPrice(2, 0, 2)
// console.log(result);


const products = [
  {name: 'shampoo', price: , quantity: },
  {name: , price: , quantity: },
  {name: , price: , quantity: },
  {name: , price: , quantity: }
]
