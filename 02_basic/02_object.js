//singleton
//create.object
const mysym=Symbol("key1")

//object literal
const jsUser={
    name:"ankita",
    [mysym]:"key1",
    age:30,
    Email:"ankita@123",
    loaction:"noida",
    isLoggin:false,
    isLogginDay:["monday","thuseday",]

}
//console.log(jsUser.Email);

//console.log(  jsUser[mysym]);
jsUser.Email="anky6727@gmail.com"
//Object.freeze(jsUser)
jsUser.Email="aakashsingh@123"

//console.log(jsUser);
jsUser.greeting =function(){
    console.log("hello world");
}
jsUser.greetingTwo =function(){
    console.log(`hello world, ${this.name}`);
}
//console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());

