const numbers = [25,36,28,95,46,87,32,245]
  // let filterNumbers = [];

  // for(let i = 0; i < numbers.length; i++){
  //   const currentNum = numbers[i]
  //     if(currentNum <= 40){
  //       filterNumbers.push(currentNum)

      
  //     }
   
  //   }

    const newFilterNum = numbers.filter(function (x){
return x <= 40;
    })
    
// console.log(newFilterNum);


const purchaseHistory = [200, 450, 350, 580, 300, 640]
const discountedPrice = []
const discountedPay = []

for(let i = 0; i < purchaseHistory.length; i++) {
  const currentPrice = purchaseHistory[i];
  if(currentPrice > 450 ){

    const calculatedPrice = currentPrice - currentPrice * 10 / 100;
    discountedPrice.push(calculatedPrice)   
  }

}

     
  // console.log(discountedPrice);

  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'tahmid', age: 4},
    { name: 'noor', age: 36},
    { name: 'inzu', age: 15}
  ];

  // const lowerThan30 = (man) => man.age < 30;
  // const olderThan30 = (person) => person.age > 30;

  const result1 = people.filter(function(person){
    return person.age > 30;

  });
  // const result2 = people.filter(olderThan30);

  console.log(result1);
 


