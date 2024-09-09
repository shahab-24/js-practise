function layeredDiscountTotal(quantity){

  const first100Price = 100;
  const second100Price = 90;
  const remainingPrice = 70;

  if(quantity <= 100) {
    const total100Price = quantity * first100Price;
    return total100Price ;
  }
  else if(quantity <=200){
    const total100Price = 100 * first100Price;
    const remainingSecond100 = quantity - 100;
    const remainingTotal = remainingSecond100 * second100Price;
    const above100Total = total100Price + remainingTotal;
    return above100Total;
  }
  else{

    const total100Price = 100 * first100Price;
    
    const remainingTotal = 100 * second100Price;
    const remainAbove200 = quantity - 200;
    const above100Total = total100Price + remainingTotal + (remainAbove200 * 70)
    return above100Total;

  }

}



const discount = layeredDiscountTotal(230)
console.log(discount);