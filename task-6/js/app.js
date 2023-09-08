document.getElementById("but").onclick = function(){
    let email = document.getElementById("exampleInputEmail1").value;

    let password = document.getElementById("exampleInputPassword1").value

if(email.includes("@") && password.length>=6){
    alert("تم تسيجلك بنجاح")
} else {
    alert("الرجاء المحاولة فيما بعد")

   }
 
}
