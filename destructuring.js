//destructuring is shortcut to extract a property from an object
const fish={id:11,name:'King Hilsha',price:9000,phone:'0123456',address:'Chandpur',dress:'silver'};
//extract id,price,dress from fish
const{id,price,dress}=fish;
console.log(id,price,dress);


const company={
 name:'robi',
 ceo:{id:'1',name:'ajmol',food:'polao'},
 web:{work:'wev development',employee:22,framework:'dotnet',
 tech:
 {first:'html',second:'css',third:'react'}

}
}
////extract work,framework from web of company
const {work,framework}=company.web;
const {food}=company.ceo;
const {second,third}=company.web.tech;
console.log(food,work,third,framework,second)