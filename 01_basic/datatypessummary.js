//data type
/*************primetive******** **/
// 7 type--------string, number,boolen,null,undefine,bigInt,symbole
const id=Symbol("123")
 let outSide=null;
 let score;
let inNum=1223446789456n
/*************nonprimetive/reference******* */
// 3 type--------object,array,functions
const heros=["srk","shalman","shahid","amir"];
const newobject={
    firstname :"ankita shahi",
    age:30,
    emailId:"ankyshahi@com"
}
let myFunctions=function(){
    console.log("hello wrold");
    
}
// console.log(typeof inNum);
// console.log(typeof outSide);
// console.log(typeof score);
// console.log(typeof myFunctions);
// console.log(typeof heros);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // stack,heap 
 // stack memory=Primitive
 let myAcountId="ankita shahi"
 let mySecondId=myAcountId
 mySecondId="Rima Singh"
 console.log(mySecondId);
 console.log(myAcountId);
 

 //heap memory=non -Primitive
 let useFirst={ name:"ankita shahi",
    age:32,
    upi:"anky123"

 }
 let userSecond=useFirst
 userSecond.upi="charisingh123"
 console.log(userSecond.upi);
 console.log(useFirst.upi);
 

