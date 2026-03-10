const user={
    username:"ankita",
    price:"999",
    welcomepop:function(){
        console.log(`${this.username}, welcome to the my website`);
        console.log(this);
        
    }
}
// user.welcomepop()
// user.username="akash"
// user.welcomepop();
//console.log(this);
function one1(){ 
   // console.log(this)
}
one1();
function two2(){
    let username="ankita"
   // console.log(this.username)
}
two2();
 const chai=()=>{
    const username="charu singh"
    console.log(this)
 }
 //chai()
//   let fourfounct=(num1,num2)=>{
//     return num1+num2

//  }
   //let fourfounct=(num1,num2)=>num1+num2
   //let fourfounct=(num1,num2)=>(num1+num2)
   let fourfounct=(num1,num2)=>({userName:"charu jee"})

 
 console.log(fourfounct(4,6))

