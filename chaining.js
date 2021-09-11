const myObject={x:2,y:90,z:87,a:78,b:64};
const {x,b}=myObject;
// console.log('myObject.i',myObject?.i?.k)

//destructuring from array
//first one chains with first and second one chains with second
const[p,q]=[34,89,45,67,87];
// console.log(q) 

const[best,worst]=['Shakil','John','Rakib'];
// console.log(best,worst)


const {sky,color}={color:'red',sky:'blue',soil:'gray'}
// console.log(sky,web)
const company={
 name:'robi',
 ceo:{id:'1',name:'ajmol',food:'polao'},
 web:{work:'wev development',employee:22,framework:'dotnet',
 tech:
 {first:'html',second:'css',third:'react'}

}
}
//optional chaining is done to avoid error sequentially
console.log(company.front?.tech.third);

