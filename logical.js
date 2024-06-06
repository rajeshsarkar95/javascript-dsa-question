// var age = 25;
// var tiketsPrice;
// if(age < 12){
//   tiketsPrice = 5;
// }else if (age >= 12 && age < 18){
//   tiketsPrice = 10;
// }else if (age >=18 && age < 60){
//   tiketsPrice = 20;
// }else{
//   tiketsPrice = 15;
// }
// console.log("tiketPrice $" + tiketsPrice)

// write the progarm for lefe yares

// var age = 16;
// var tiketPrice;

// if(age < 12){
//   tiketPrice = 5;
// }else if (age >= 12 && age < 18){
//   tiketPrice = 10;
// }else if (age >= 18 && age < 60){
//       tiketPrice = 20;
// }else {
//   tiketPrice = 15;
// }
// console.log("Tiket Price " + tiketPrice)

// var purchaseAmount = 120;
// var discount;

// if (purchaseAmount >= 100) {
//   discount = 20;
// } else if (purchaseAmount >= 50) {
//   discount = 10;
// } else {
//   discount = 0;
// }
// console.log("Discount: " + discount + "%");
// var weight = 70; // in kilograms
// var height = 1.75; // in meters
// var bmi = weight / (height * height);
// var category;

// if (bmi < 18.5) {
//   category = "Underweight";
// } else if (bmi < 24.9) {
//   category = "Normal weight";
// } else if (bmi < 29.9) {
//   category = "Overweight";
// } else {
//   category = "Obese";
// }
// console.log("BMI: " + bmi.toFixed(2)); // .toFixed(2) limits the number of decimals to 2
// console.log("Category: " + category);

// var secretNumber = 7;
// var guess = 5; // The player's guess, change this to see that different code lines are executed based on the conditions
// if (guess === secretNumber) {
//   console.log("Congratulations! You guessed the correct number.");
// } else if (guess < secretNumber) {
//   console.log("Try a higher number.");
// } else {
//   console.log("Try a lower number.");
// }
// for (var i = 0; i <= 15; i++) {
//     console.log("Value of i is: " + i);
//  }
//  for (var i = 7; i <= 31; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// for (var i = 10; i >= -20; i--) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }

// more quetion all 
// quetion 1 
// console.log(Math.max(1,2,3,4,5,6,7,))

// quetion 2
// const arr = [1,2,3,4,5,6,7,8,8,9,8,8]
// const duplicates = [...new Set(arr)]
// console.log(duplicates)

// quetion 3
// skips


// quetion 4
// const arr = [10,20,30,40,50]
// let sum = 0;
// for (let i = 0; i < arr.length; i++ ){
//     sum += arr[i]
// }
// console.log(sum)

// soleving quetion 5

// let numbers = [10, 20, 20, 50, 30, 34, 40];
// let even = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {  // Use strict equality check
//         even.push(numbers[i]);
//     }
// }
// console.log(even);  // Log the array directly

// solving quetion 6th 
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,]
// let even = numbers.filter(function(number){
//     return number % 2 !== 0;
// })
// console.log(even)
// asinc function 
// async function F(){
//     console.log('async function')
//     return Promise.resolve(1)
// }
// F()
// method 2 
// async function f(){
//     console.log('async function')
//     return Promise.resolve(1,2,3,4,5,6)
// }
// f().then(function(result){
//     console.log(result)
// })
// Simulating an asynchronous API call
// quetion of swithc condition
// let month = 4;

// if (month === 1) {
//     console.log('January');
// } else if (month === 2) {
//     console.log('February');
// } else if (month === 3) {
//     console.log('March');
// } else if (month === 4) {
//     console.log('April');
// } else {
//     console.log('Unknown month');
// }

// // Equivalent switch statement
// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     default:
//         console.log('Unknown month');
// }


