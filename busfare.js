const age = 65;
const isStudent = true;
const fare = 800;


if(age < 10) {
  console.log('bus fare free');
}
else if(isStudent && age > 10){
  const discount = fare * 50 / 100;
  const price = fare - discount
  console.log('fare discount',discount);
  console.log('fare pay',price);
}
else if(age >= 60) {
  const payDiscount = fare * 15 / 100;
  const payPrice = fare - discount;
  console.log('fare paydiscount',payDiscount);
  console.log('fare payprice',payPrice);
}
else{
  console.log('ticket fare 800tk');

}