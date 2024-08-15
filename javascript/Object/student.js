// let student = {
//     name: 'shikhar',
//     age: 22,
//     email: 'shuklashikhar344@gmail.com'
// }
// student.age = 10
// console.log(student);


// let student = {
//     name: 'shikhar',
//     age: 22,
//     email: 'shuklashikhar344@gmail.com',
//     greet(){
//         console.log('hello',this.name);
//     }
// }
// student.greet()


// let student = {
//     name: 'shikhar',
//     age: 22,
//     email: 'shuklashikhar344@gmail.com',
//     adderes:{
//         country: 'India',
//         city: 'kanpur',
//         pincode: 209203
//     }
// }
// student.adderes.pincode = 29876
// console.log(student.adderes);


// let friend = {
//     name: 'sandeep',
//     age: 62,
//     email: 'sandeepchhotu@gmail.com',
//     greet(){
//         console.log('hello',friend.name);
//     }
// }
// friend.greet()
// console.log(friend);


// class student{
//    constructor(name, age, email, country, city, pincode){
//     this.name = name
//     this.age = age
//     this.email= email
//     this.country = country
//     this.city = city
//     this.pincode = pincode
//    }
//    greet(){
//       return `hello ${this.name}`
//    }
//    getfulladdress(){
//       return `${this.country} ${this.city} ${this.pincode}`
//    }
// }
// let result = new student('shikhar',22,'shuklashikhar44','india','kanpur',300298)
// console.log(result.getfulladdress());


class Employee{
   constructor(name,age,email,department,position,salary){
      this.name = name
      this.age = age
      this.email = email
      this.department = department
      this.position = position
      this.salary = salary
   }
   introduce(){
      return `Hello, I am ${this.name} software Developer`
   }
   displaysalary(){
      return `salary ${this.salary}`
   }
}
let newEmployee = new Employee('shikhar','22','shuklashikhar','sales','manager',500000000000)
console.log(newEmployee);
let result = newEmployee.introduce()
console.log(result);

newEmployee.displaysalary()

let manager = new Employee('shikhar','22','shuklashikhar','sales','manager',500000000000)
console.log(manager);
manager.introduce()
manager.displaysalary()