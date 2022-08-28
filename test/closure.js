a= ()=>{

let counter=0
 function increment (){
        counter+=1
        return counter
    }
return increment

}

let retval=a()
console.log(retval())
console.log(retval())
console.log(retval())
console.log(retval())
console.log(retval())