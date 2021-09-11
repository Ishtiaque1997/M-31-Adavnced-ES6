//filter gives all the elements that fulfills the condition in an array 
//filter gives an empty array if condition is not fulfilled
//find gives the direct element on the basis of the condition
//for more than one element fulfilling the condition first one is given and undefined if nothing is found
const numbers=[76,34,59,5,12,54,67,78,90,32];
const bigNumbers=numbers.filter(num=>num>20);
const smallNumbers=numbers.filter(num=>num<20);
// console.log(bigNumbers,smallNumbers)
const products=[
 {name:'Water-Bottle',price:90,color:'red'},
 {name:'Mobile phone',price:15000,color:'black'},
 {name:'Watch',price:3000,color:'green'},
 {name:'Paper',price:30,color:'white'},
 {name:'Glass',price:25,color:'yellow'},
]
const expensive=products.filter(product=>product.price>500);
// console.log(expensive);

const blacks=products.filter(product=>product.color=='pink');
// console.log(blacks)

const whiteItem=products.find(product=>product.color=='black');
// console.log(whiteItem)