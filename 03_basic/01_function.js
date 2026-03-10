 function sayMy(){
    console.log("Rima");
    console.log("priya");
    console.log("pooja");
    console.log("Gudiya");
    console.log("Garima");
    
 }
 //sayMy()
//  function addtwonum(num1,num2){
//     console.log(num1+num2)
//  }
//  addtwonum(4,7)
//  addtwonum(20,50)
// function addTwoNum(num1,num2){
//     //let result=num1+num2;
//     //return result
// return num1+num2
// }
// const result=addTwoNum(9,12)
// //console.log( "result=", result)
// console.log( `result= ${result}`)
function userLoggedIN(username="rima"){
    if(!username){
        console.log("plecse Enter the Username");
      return  
    }
return(`${username} just loggedIn `)
}
//console.log(userLoggedIN("ankita shahi"))
//console.log(userLoggedIN("anky"))
function calcutateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calcutateCartPrice(100,200,600,300))
let User={
    name:"ankita shahi",
    age:24,
    Email:"anky567"

}
function handleobject (anyobject){
    console.log(` user name is ${anyobject.name} and user Email is ${anyobject.Email} `)

}
handleobject(User)
const myArray=[100,300,500,600]
function  resturnSecondValue (getarray){
    return(getarray[2])
}
//console.log(resturnSecondValue(myArray));
console.log(resturnSecondValue(User));