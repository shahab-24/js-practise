// const burger = 1000;

// // // if(burger > 500){
// // //   console.log("mojo is free with burger");
// // // }
// // // else {
// // //   console.log('mojo is 30 tk');
// // }
// burger > 500 ? console.log('mojo is free') : console.log( "mojo has to buy")

// const bmi = 18.5;
// if(bmi < 18.5){
//   console.log("you are underweight");
// }
// else if(bmi >=18.5 && bmi <= 24.9){
//   console.log('You are Normal');
// }
// else if(bmi >=25 && bmi <= 29.9) {
// console.log('you are overweight');
// }
// else{
// console.log('you are obese');
// }

const bmi = 23;

switch(bmi){
 
case (bmi >=18.5 && bmi <= 24.9) :
  console.log('You are Normal');
break;

case (bmi >=25 && bmi <= 29.9) :
console.log('you are overweight');
break;

default:
console.log('you are obese');

}