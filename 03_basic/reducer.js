// const myNums=[1,2,3]
// const myNewNums=myNums.reduce((acc,crntvalu)=>{
//     console.log(`acc value: ${acc}, crntvalue ${crntvalu}`)
//     return acc+crntvalu
    
// },0)
    

// console.log(myNewNums)
 const shoppingCard=[
     {
         items:"pakistani suit",
         price:2334
     },

     {
         items:"indian suit",
         price:4300
     },

     {
         items:"cutton suit",
         price:2000
     },

     {
         items:"silk suit",
         price:3000
     },
]
console.log( shoppingCard.reduce( (acc,item)=>acc+item.price,0));

