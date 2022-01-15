// //1.Javascript Console API

// console.log("This is me");
// //alert("Swarna");
// document.write("This is Document Write")

// document.write("Swarna is here");
// console.warn("WARNING");
// console.error("THIS IS AN ERROR");
// console.log("THIS IS SWARNA");

//2. Javascript Variables
//Container to store data values
// var number1=34;
// var number2=35;
//  console.log(number1+number2);

//3.Datatype in Javascipt

//string
// var str1="This is a String";
// var str2="I know this is a string";

// //Numbers
// var num1=31;
// var num2=56;

// //object
// var marks={
//     ravi: 34,
//     shubham: 78,
//     harry=99.77,
    

// }

// console.log(marks);
/*
At a very high level , there are two type of datatype

1. Primitive data type- undefined, null, number, string , boolean, symbol
2. Reference Data type- Arrays and objects


var arr= [1,2,3,4,5]
*/

//4.functions
// function avg(a,b){
//     return (a+b)/2;
// }

// c1=avg(4,6);

// console.log(c1);


//5. Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('You can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('You can drink rasna water');
// }
// else{
//     console.log('You cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log("You are not a kid");
}
else if(age >26){
    console.log("Bachhe nahi rahe");
}
else if(age >22){
    console.log("Yes Bachhe nahi rahe");
}
else if(age >18){
    console.log("18 Bachhe nahi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("End of ladder");
*/

// let myArr=["Fan","Camera",34,null,true];
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr.length);
// myArr.shift();
// console.log(myArr);
// d=[1,4,6,36,43,32324];
// d.sort();
// console.log(d);

// String Methods in JavaScript
// let myLovelyString = "Harry is a good boy good good Harry";
// // console.log(myLovelyString.length)
// // console.log(myLovelyString.indexOf("good"))
// // console.log(myLovelyString.lastIndexOf("good"))
// // console.log(myLovelyString.slice(1,4))
// d = myLovelyString.replace("Harry", "Rohan");
// // d = d.replace("good", "bad");
// // console.log(d, myLovelyString)

// let myDate=new Date();
//console.log(myDate);
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//let myArr=["fan","Camera",34,null,true];
//array method
// console.log(myArr);
// myArr.pop();
// console.log(myArr);
// myArr.push("Swarna");
//console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift("Swarna");
// console.log(myArr);

// DOM Manipulation
//let elem=document.getElementById('click');
//console.log(elem);

// let elemClass=document.getElementsByClassName("container");
// //console.log(elemClass);
// //elemClass[0].style.background="yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
//elemClass[0].classList.remove("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div')
// // console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// // removeChild(element); ---> removes an element

// // Selecting using Query
// //sel=document.querySelector('.container')
// //console.log(sel)

// sel=document.querySelectorAll('.container')
// console.log('sel')

//JavaScripts Events

// function clicked(){
//     console.log('The button was clicked')
// }

// window.onload = function(){
//     console.log('The document was loaded')

// }

// FirstContainer.addEventListener('click',function(){
// console.log("Click Hua")
// })

// FirstContainer.addEventListener('mouseover',function(){
//     console.log("Click Hua")
//  })

//  FirstContainer.addEventListener('mouseout',function(){
//     console.log("Click nhi Hua")
//  })

// FirstContainer.addEventListener('mouseup',function(){
//     console.log("Mouse up when clicked on container")
//  })

//  FirstContainer.addEventListener('mousedown',function(){
//     console.log("Mouse down when clicked on container")
//  })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })


//Arrow Function

// function summ(a,b){
// return a+b;
// }

// summ=(a,b)=>{
//     return a+b;
// }

// logKaro = ()=>{
//     console.log("I am your Log")  
// }
// //SetTimeout and setinterval
// //setTimeout(logKaro,2000);
// clr=setInterval(logKaro,2000);

// // use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// clearInterval(clr)

// JavaScript localStorage
//localStorage.setItem('name','Swarna')
 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// Json 

//obj={name:"swarna",length:1}
// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}   //JSON standard requires double quotes and will not accept single quotes
// jso=JSON.stringify(obj);
// console.log(jso)
// console.log(typeof jso)
// parsed=JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// //console.log(parsed);

// Template literals - Backticks
a = 34;
console.log(`this is my ${a}`)




