// let example1=30;
// example1=20;
// example1=0;
// console.log(example1)

// let age:number=29;     //set the variable & it's type in TS.
// let club:string="FCB"
// const isFamous:boolean=true;
// console.log(club)


                     //1.Function in TypeScript

// function add(x:number,y:number){  // set the parameter & it's type in TS.
//     return x+y;
// }
// const result=add(10,20);
// console.log(result);

// function fullName(firstName:string,lastName:string){
//     return firstName+' '+lastName;                   // set the return type in TS.
// }
// const getFullName=fullName('abu','torab');
// console.log(getFullName);

// const doubleIt=(p:number):void=>{   //return void that means there is no any return value.
//     const res =p*2;
//     console.log(res);
// }
// const output=doubleIt(10);
// console.log('output',output);

// const multiply=(x:number,y:number):number=>x*y; //arrow function
// console.log(multiply(10,20));

// let mul:(c:number,d:number)=>number;      //it's also arrow function but we set the function type firstly.
// mul=(c,d)=>c*d;
// console.log(mul(5,5));


                       //2.Array in TypeScript

// let numbers:number[]=[10,44,52,23,34,35,]
// numbers.push(50);

// let largeName:string='';
// let names:string[]=['abu','torab','khan','rishan','rivan'];
// for(let i=0;i<names.length;i++){
//     let name:string=names[i];
//     if(name.length>largeName.length){
//         largeName=name;
//     }
// }
// console.log(largeName);


                //3.Object in TypeScript
//object structure in TS

// let player:{
//     name:string;
//     club:string;
//     age:number
// }                              //create object structure and given the value
// player={
//     name:"C.Ronaldo",
//     club:"Real Madrid",
//     age :34
// }
// console.log(player.age);


// const student={
//    name:"rishan",
//    age:25
// }
// student.age=50;


          //4.Interface in Type script.

// interface Player{     //Interface name start with capital letter as like class.
//     name:string;
//     club:string;        //this is the interface structure or model.
//     salary:number;
//     wife?:string;        //?:If any properties have confusion about the value,then using the Question(?) .
//     isPlaying:boolean
// }
// const messy:Player={      //here ,using interface,we are making object which is contain the interface property & value.
//     name:"lionel",
//     club:"FCB",
//     salary:45000000,
//     wife:"lopez",
//     isPlaying:true
// }
// const ronaldo:Player={
//     name:"Cristian",
//     club:"RM",
//     salary:40000000,           //here ,wife is missing.
//     isPlaying:true,
// }

// function getBonus (player: {salary:number} ){
//      return player.salary*2;
// }

// const poorPlayer={salary:20000} //creating new object
// getBonus(poorPlayer) ;         //using object parameter in function,you get the new object & it's value.
// getBonus(messy)                //You can send object messy as a parameter.Because it has salary property.
//  const salaryBonus=getBonus({salary:10000})

// function getBonus(player:Player,friends:string[]){   //you can set array as a parameter. 
//                                                     //Player is interface model.You can access it's property.
//     return player.club;
// }
//  const messyClub=getBonus(messy,['sonu','monu']);      //pass the value of string parameter & object parameter. 
//  console.log(messyClub);


class Person{
    public name:string;           //protected is only access in child ,inherited field.
    //private _partner:string;      //private property only accessible in class.
    readonly father:string;          //when readonly used,you can not change the property value.
    constructor(name:string,father:string){
        this.name=name;                  //this.name is property & name is value of parameter.         
        this.father=father;
       // this._partner=partner;       
    }
    getName():string{             //getName() is an method & it's return this.name
        return this.name;
    }
}
let student=new Person('rishan','bashar khan')
  console.log(student.name,student.father);    //create a new object ,using person class.