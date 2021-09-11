const friends=['Tom','John','Harry','Peter'];
const fLengths=friends.map(friend=>friend.length);
// console.log(fLengths)

const products=[
 {name:'Water-Bottle',price:90,color:'red'},
 {name:'Mobile phone',price:15000,color:'black'},
 {name:'Watch',price:3000,color:'green'},
 {name:'Paper',price:30,color:'white'},
 {name:'Glass',price:25,color:'yellow'},
]
const productNames=products.map(product=>product.name);
const productPrices=products.map(product=>product.price);
console.log(productNames,productPrices);
products.forEach(product=>console.log(product.price))
//map is used when return is necessary and foreach is used when return is not necessary
