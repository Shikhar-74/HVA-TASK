// let color = [ "red", "green", "blue"]
// console.log(color[0]);


// update
// let color = [ "red", "green", "blue"]
// color[1] = 'yellow'
// console.log(color[1]);


// add
// color.push('pink')
// console.log(color);



// using for loop
// let color = [ "red", "green", "blue"]
// for(i=0; i<color.length; i++){
//     console.log(color[i]);
// }


// using while loop
// let color = [ "red", "green", "blue"]
// i=0
// while(i<color.length){
//     console.log(color[i]);
//     i+=1
// }


// using for of loop





// check type of
// let color = [ "red", "green", "blue"]
// console.log(typeof(color));


// length find
// let color = [ "red", "green", "blue"]
// console.log(color.length);



// use pop method
// let color = [ "red", "green", "blue"]
// let result = color.pop('blue')
// console.log(color);



// let color = ['red','greem','blue']
// color.owner = 'shikhar shukla'
// for(let x of color){
// }
// console.log(color);



// foreach map filter 
// Use forEach() when you need to iterate through an array without needing a new array.
// Use map() when you need to transform elements and want a new array based on those transformations.

// let numbers = [1,2,3,4,5]
//  numbers.forEach(function(num){
//   console.log(num);
// })


// let numbers = [1,2,3,4,5]
// numbers.forEach(function(num){
//   console.log(num*2);
// })


// let array = [2,3,4,5]
// array.map(function(num){
//   console.log(num*num);
// })


// using arrow function
// let array = [2,3,4,5]
// let result =  array.map((num)=>{
//   return num*num
// })
// console.log(result);



// let numbers = [1,2,3,4,5,6,7,8]
// let result =  numbers.filter(function(num){
//   if(num%2==0)
//     return num
// })
// console.log(result);


// using arrow function
// let numbers = [1,2,3,4,5,6,7,8]
// let result = numbers.filter((num)=>{
//   if(num%2==0){
//     console.log(num);
//   }
// })


// manipulation temperatures

// let temperatures = [-3, 14, 22, 5, -10]
// temperatures.forEach((num)=>{
//   console.log(num);
// })

// using arrow function
// let temperatures = [-3, 14, 22, 5, -10]
// temperatures.forEach((temp)=>{
//   console.log( (temp * 9/5) + 32);
// })


// using map with arrow function
// let temperatures = [10,20,30,40,45,65]
// let result = temperatures.map((num)=>{
//     return (num * 9/5) + 32
// })
// console.log(result);


// let belowFreezing= [1,2,-3,4,-5]
// let result =  belowFreezing.filter((num)=>{
//         return num<0
// })
// console.log(result);


// operation on fruits

// let fruits =["apple", "banana", "cherry", "date"]
// let result = fruits.forEach((str)=>{
//    console.log(str.toUpperCase());
// })

// count total element
// let fruits =["apple", "banana", "cherry", "date"]
// let count = 0
// fruits.forEach((fruit)=>{
//     count+=fruit.length

// })
// console.log(count);


// reverse array 
// let fruits =["apple", "banana", "cherry", "date"]
// let reversefruits = fruits.map((fruit)=>{
//     return fruit.split(' ').reverse().join(' ')
// })
// console.log(reversefruits);



// if fruit length greater than 5 then print
// let fruits =["apple", "banana", "cherry", "date"]
// let count = 0
// let longfruit = fruits.filter((fruit)=>{
//     return fruit.length > 5
// })
// console.log(longfruit);


// use map or filter 
// let fruits =["apple", "banana", "cherry", "date"]
// let findfruits = fruits.filter((fruit)=>{
//     return fruit.includes('a')
// })
// let result = findfruits.map((str)=>{
//     return str.toLocaleUpperCase()
// })
// console.log(result);