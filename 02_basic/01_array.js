let arr=[0,1,2,3,4]
//console.log(arr)
//console.log(typeof arr)
//console.log(arr [2]);
let heros=["srk","amir"];
let myarr= new Array(1,4,6,8,7,8)
//console.log(myarr);


//Array Method

myarr.push(45);
//console.log(myarr);
myarr.pop();
//console.log(myarr);
myarr.unshift(30)
//console.log(myarr);
myarr.shift();
//console.log(myarr);
//console.log(myarr.includes(9));
//console.log(myarr.includes(8));
//console.log(myarr.indexOf(8));
 let myNewArr=myarr.join();
 //console.log(myarr)
 //console.log(  myNewArr)
myarr.slice(2,3)
//console.log(myarr);


//slice and splice


const inhero=["sarukh", "shahid","ramcharn"]
const suthero=["mehashbabu","parbhash","junior ntr"]
//inhero.push(suthero)
//console.log(inhero);
//console.log(inhero[3][1]);
 const newHero= inhero.concat(suthero);
//console.log(newHero);
const allHero=[...inhero,...suthero]
//console.log(allHero);
const anotherarr=[1,2,3,[4,5,[6,7,[9]]]]
const real_another=anotherarr.flat(Infinity)
//console.log(real_another);
//console.log(Array.isArray("ankita"));
//console.log(Array.from("ankita"));
//console.log(Array.from({name:"ankita"}));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));












