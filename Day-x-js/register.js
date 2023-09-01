function Register(event){
event.preventDefault()
var username=document.getElementById("Name").value
var email=document.getElementById("E-mail").value
var url=document.getElementById("url").value

// console.log(username,email,url)

if(username && email && url)
{
   var Object = {name:username,emailadd:email,path:url}
   console.log(Object)
    var array =JSON.parse(localStorage.getItem("users"))|| []
    array.push(Object)
   localStorage.setItem("users",JSON.stringify(array))
}
else{
    alert("Incomplete Information")
}



}