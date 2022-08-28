let a="my name is osho"

d={}
ans=''
for(let i of a){
    if(i in d){}
    else{
        if(i!=' '){

            d[i]=1
        }
        ans+=i
    }
}
console.log(ans)
e="hello"
switch(e){
 case 1:
    console.log("1 was entered")
    break
case "hello":
    console.log("hello")
    break
}


var hi =(name )=>{
    return "Hi !! "+(name || '')
}
var hey =(name)=>{
    return "Hey !!!"+ (name || '')
    
}

var greet =(function_type,name)=>{
 console.log(function_type(), name)

}


greet(hi,"osho")
greet(hey, "varun")

