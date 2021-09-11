class Support{
 name;
 designation='support web dev';
 address='BD';
 constructor(name,address){
    this.name=name;
    this.address=address;
 }
 startSession(){
  console.log(this.name,'start a session');
 }
}

const amir=new Support('Amir Khan','BD');
const salman=new Support('Salman Khan','Dubai');
amir.startSession();
console.log(amir);
// console.log(salman)
//to address any property inside the class this keyword is used.







class Person{
 name;
 phone='0123456';
 role='Actor';
 address='bh'
 constructor (name,role,address){
   this.name=name;
   this.role=role;
   this.address=address;
 }

}
// const salman=new Person('Salman','Actor');
// console.log(salman)

