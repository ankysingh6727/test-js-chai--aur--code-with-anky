//for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }
//for (let i = 0; i< 10; i++) {
   // const element = i;
    //if (element==5) {
      //  console.log(" 5 is  best number")
        
    //}
    //console.log(element);
   
    
//}

for (let i = 0; i <10; i++) 
{
    console.log(`outer loop is ${1}`)
    
}
let arr =["srk","amir","23456"]
for (let index = 1; index < arr.length; index++) {
    const hero = arr[index];
    console.log(hero);

    
}
for (let i = 1; i < 10; i++) {
    console.log(`table 1 to ten ${i}`);
    for (let j = 1; j <10; j++) {
        console.log(`${i*j}`)
        
    }
    
    
}
// break and continue
for (let index = 1; index <20; index++) {
    if (index== 5) { console.log(" 5 is the best")
        continue
        
    }
    console.log(` value of is ${index}`);
    
    
}
for (let index = 1; index <20; index++) {
    if (index== 5) { console.log(" 5 is the best")
        break
        
    }
    console.log(` value of is ${index}`);
    
    
}
