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
// }Equallity oprators
// console.log(5 == "5");// true
// console.log(5 === "5") // false 
// javascript hosting
// console.log(x)
// var x = 5;
// javascript closures 
// function outerFunction(){
//     let outerVarible = 'I an from outer function '

//     function innerfunctio(){
//         console.log(outerVarible)
//     }
//     return innerfunctio;
// }
// const innerFucnc = outerFunction();
// innerFucnc();  // outer: i am from outer function 


// this keyword 
// const person = {
//     name:"Rajesh sarkar",
//     greet:function(){
//         console.log('hello my name is' + this.name)
//     }
// }
// person.greet();

// prototype inheritance 
// function Person(name){
//     this.name = "Rajesh sarkar";
// }
// Person.prototype.greet = function(){
//     console.log("hello my name is " + this.name)
// }
// const jone = new Person('jonh')
// jone.greet();

// map function

// const number = [1,2,3,5,6,7,8,9]
// const doubleNumber = number.map(num => num * 2);
// console.log(doubleNumber)

// Asynchronus Programing 
// console.log("start")
// setTimeout(() => {
//     console.log("async aopration")
// },2000);
// console.log("end")
// this reverse String quetion 
// function reverseString(str){
//   return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"))

// find maximum element in the array
// function findmax(arr){
//   return Math.max(...arr)
// }
// console.log(findmax([1,2,3,4,5,6,7,8,9]))
// prom numbers
// function isPrime(num){
//   if (num <= 1) return false;
//   for(let i= 2; i <= Math.sqrt(num); i++) {
//     if(num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(7))
// Generate Fibonacci  Sequence 
// function filbonacci(n){
//   const Sequence = [0,1];
//   for(let i =2; i < n; i++ ){
//     Sequence.push(Sequence[i -1] + Sequence[i - 2]);
//   }
//   return Sequence;
// }
// console.log(filbonacci(10))
// function secondLargest(arr) {
//   let first = -Infinity, second = -Infinity;
//   for (let num of arr) {
//       if (num > first) {
//           second = first;
//           first = num;
//       } else if (num > second && num != first) {
//           second = num;
//       }
//   }
//   return second;
// }
// console.log(secondLargest([10, 5, 8, 12, 3])); // Output: 10 
// arrow function 
// const add = (a,b)=>a + b;
// console.log(add(2,3))
// javascript hosting 
// console.log(hoistevar)
 // output undefind
// var hoistevar = 5 ;

// hostedFunction();
// function hostedFunction(){
//     console.log("hosted")
// }   

// merge shortd array 
// function mergeSortedArrays(arr1, arr2) {
//     // Initialize an empty array to store the merged result
//     let mergedArray = [];
//     // Initialize pointers for arr1 and arr2
//     let i = 0, j = 0;
    
//     // Loop until one of the arrays is fully traversed
//     while (i < arr1.length && j < arr2.length) {
//         // Compare elements at current pointers
//         if (arr1[i] < arr2[j]) {
//             // Push the smaller element into mergedArray and move pointer in arr1
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             // Push the smaller element into mergedArray and move pointer in arr2
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     // Concatenate any remaining elements from arr1 and arr2
//     return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
//   }
  
//   // Test the function
//   console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
//   setprototype
// const person = {
//     name:"rajesh sarkar",
//     age:54
// };
// const student = {
//    id:1,
//    gpa:3.5,
// }
//   Object.setPrototypeOf(student,person);

//   console.log(student.name)


// mergedarray 
function mergeSortedArrays(arr1,arr2){
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr1.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i])
            i++;
        }else {
            mergedArray.push(arr2[j])
            j++;
        }
    }
    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j))
}
console.log(mergeSortedArrays([1,3,2],[5,4,5]))









