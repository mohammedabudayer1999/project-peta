
/*let arr=[7,8,5 ,1,9 ,2];
let newarr=arr.slice(3,5);
let newww=newarr.reverse();
console.log(newww.join("|"));
*/
/*
let newarr=arr.slice(3,5).reverse().join("|");
console.log(newarr);*/


/*for(let  i=0; i<arr.length; i++){
     sum+=arr[i];
}
console.log("Sum",sum);*/
/*
let a1=20;
let a2=30;

function app(...params) {
     let sum=0;
     for (let i=0; i<params.length; i++){
          sum+=params[i];
     }
     console.log("Sum",sum);

}
app(a1=20,a2=30);*/


function divideNumbers() {
     let num1Input = document.getElementById("num1");
     let num2Input = document.getElementById("num2");
     let resultElement = document.getElementById("result");
 
     let num1 = parseFloat(num1Input.value);
     let num2 = parseFloat(num2Input.value);
 
     if (isNaN(num1) || isNaN(num2)) {
         throw new Error("الإدخال يجب أن يكون أرقامًا فقط!");
     }
 
     if (num2 === 0) {
         throw new Error("لا يمكن قسم عدد على الصفر!");
     }
 
     let result = num1 / num2;
 
     resultElement.textContent = "النتيجة: " + result;
 }
 