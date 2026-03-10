 //const tinderUser=Object(); singleton object
 //const tinderUser={}; non singleton object
 const tinderUser={
    name:"ankita",
    age:23,
    Email:"anky1234",
    addres:"noida"


 }
 //console.log(tinderUser.Email);
 const regularUser={
    email:"ankita456",
    fullName:{
        firstName:"ankita",
        lastName:"shahi"
    }
 }
 //console.log(regularUser.fullName.firstName);
 const object1={1:"a",2:"b"}
 const object2={3:"c",4:"d"}
 //const object4=Object.assign({},object1,object2)
 const obje4={...object1,...object2}
 //console.log(obje4);
 

 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));
 console.log(tinderUser.hasOwnProperty('email'));
 
