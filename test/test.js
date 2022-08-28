// use StrictMode;
let arr = [1, 2, 3, 4, 3, 2, "hvfsu", true]

console.log(typeof (arr));

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}

// arr.forEach(element => {
//     console.log(element)
// });
console.log(arr[3])


// object

obj = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "hobbies": [1, 2, 3, 4, 5, 6],
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
address = obj.address.street + " , " + obj.address.suite + ""
console.log(address);
// // let test = JSON.parse(obj)
// test = obj.hobbies
// console.log(test.length);
for (let i = 0; i < obj.hobbies.length; i++) {
    console.log(obj.hobbies[i]);
}


callback = () => {
    console.log("cb")
}


setTimeout(callback, 3000)
console.log("between")
setTimeout(() => console.log("time out 2"), 3000)

// event loop


let apicall = new Promise((resolve, reject) => {
   // get data from apI
   setTimeout(() =>  resolve("data"), 3000)
   setTimeout(() =>  reject("no data"), 2000)
})

apicall.
then((ss)=>console.log(ss))
.catch((e)=>console.log(e))

// 
// .then((response) => response.json())
// .then((data) => console.log(data));

// ASYNC AWAIT
let a=100
console.log("Async method")

 callAPi =async ()=>{
    try{
        let ans = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log(ans.json())
    }
    catch(e){
        console.log("Exception ",e)
    }
}

callAPi()