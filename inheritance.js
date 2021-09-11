class TeamMember{
  name;
 designation='support web dev';
 address='BD';
 constructor(name,address){
    this.name=name;
    this.address=address;
 }
}


class Support extends TeamMember{
 groupSupportTime;
 constructor(time){
  super(name,address)
  this.groupSupportTime=time
 }
 startSession(){
  console.log(this.name,'start a session');
 }
}
class StudentCare extends TeamMember{

 buildARoutine(student){
  console.log(this.name,'build a routine',student)
 }
}

class NeptuneDev extends TeamMember{
 codeEditor;
 constructor (name,address,editor){
  super()
  this.editor=editor;
 }
 releaseApp(version){
  console.log(this.name,'release app version',version)
 }
}

const amir=new Support('Amir Khan','BD',11);
const salman=new Support('Salman Khan','Dubai',12);
amir.startSession();
console.log(amir);
// console.log(salman)
//to address any property inside the class this keyword is used.


const alia=new StudentCare('Alia bhatt','Mumbai');
console.log(alia);









