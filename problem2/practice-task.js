// task-1----lowest number

const heights2 = [167, 190, 120, 165, 137, 100];

function getMinNumber(number) {
  let lowestNum = number[0];

  for (const num of number) {
    if (num > lowestNum) {
      lowestNum = num;
      // console.log(lowestNum);
    }
  }
  return lowestNum;
}

// const result = getMinNumber(heights2);
// console.log(result);

// task-2----smallest name

const heights = ["rahim", "robin", "rafi", "ron", "rashed"];

function getMinName(names) {
  let smallestName = "";
  for (const name of names) {
    if (name.length < smallestName.length) {
      // smallestName.push(name)
      smallestName = name;
    }
  }
  return smallestName;
}

const result2 = getMinName(heights);
// console.log(result2);

// task--3---

function calculateElectronicsBudget(quantity1, quantity2, quantity3) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const laptopPrice = quantity1 * laptop;
  const tabletPrice = quantity2 * tablet;
  const mobilePrice = quantity3 * mobile;

  const totalPrice = laptopPrice + tabletPrice + mobilePrice;
  return totalPrice;
}
const result3 = calculateElectronicsBudget(2, 3, 4);
// console.log(result3);

// task-4------

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(products) {
  const length = products.length;
  // console.log(length);
  let sum = 0;

  for (const product of products) {
    // console.log(product.price);
    // const productPrice = product.price;
    // sum = sum + productPrice;

    // sum += productPrice
    sum += product.price;
  }
  const avg = sum / length;
  return avg;
}

const result4 = findAveragePhonePrice(phones);
// console.log(result4);

// task-5

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];





function totalSalaryOfEmployees(month){

  const shahinIncrement = 1000 * 5;


}