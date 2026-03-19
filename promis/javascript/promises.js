const promiesOne= new Promise(function(resolve,reject){
    // do an aync
    //DB calls,network,cerptoghraphy
    setTimeout(function(){
        console.log('Async Task is Complited')
        resolve()

    },1000)
});
promiesOne.then(function(){
    console.log("Promise Resumed")
});
new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve()
        console.log("asynct task 2 is resolve")
        
    }, 1000);

}).then(function(){
    console.log("async 2 is resolve")
});
const promiseThree= new Promise(function(resolve,reject){
    //console.log("Async task three is Resumed")
    setTimeout(function(){
        resolve({userName:"ankita",Email:"anky@gmail"})
    },1000
)

})
promiseThree.then(function(user){
    console.log(user)

})
const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if (!error) {
            resolve({userName:"aakash", Emailid:"akki@com"})
            
        }else{ 
            reject(" DB is reject")

        }
    },1000)
})
promisefour.then(function(user){
    console.log(user)
    return user.userName

}).then((useme)=>{
    console.log(useme)
}).catch(function(error)
{
    console.log(error)
}).finally(()=>{
    console.log("result")
})
const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let Error= true
        if(!Error){
            resolve({username:"javascript", email:"123@gmail"})
        }else{
            reject('js went wonug')
        }
    },1000)
})
async function promisefiveconsumed(){
    try{
        const response =await promiseFive
    console.log(response)
    }catch(error){
        console.log(error)

    }
}
promisefiveconsumed()


// async function getAllUser(){
//     try {
//          const response= await fetch('https://randomuser.me/api/')
//      const data= await response.json()
//      console.log(data)

//     } catch (error) {
//         console.log("E:error")
//     }
// }
// getAllUser()

fetch('https://randomuser.me/api/')
.then((response)=>{
   
    return response
}).then((data)=>{
    console.log(data)
}).catch((error)=>
{
    console.log(error)
})