//document.getElementById("id").onclick = function(){
  //  this.style.fontSize="25px";
//}



document.getElementById("but").onclick = function(){
    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value

if(email.includes("@") && password.length>=6){
    alert("تم تسيجلك بنجاح")
} else {
    alert("الرجاء المحاولة فيما بعد")

   }
 
}




document.getElementById("button").onclick = function(){
    let number = document.getElementById("number").value;
    if(number==0){
        alert("هذا صفر")
}else{
    if(number %2) {
        alert("odd")
    }else{
        alert("even")
    }

}


}


/*let  month =  "fab" ;
switch(month){
    case "jan": 
    console.log(1);
    break;
    case "fab": 
    console.log(2);
    break;
    case "mar": 
    console.log(3);
    break;

}
*/
var myname="محمد يوسف ابوداير";
var myage="24";
document.getElementById("Click").onclick=function(){
document.write(myname+' '+myage);
}


for(let i=0; i<=100 ; i+=2){
   console.log(i)
    }