

//   document.getElementById("parent").addEventListener("click", function() {
//     console.log("Parent clicked");
//   });

//   document.getElementById("child").addEventListener("click", function() {
//     console.log("Child clicked");
//   });


//   //IIFE (Imeditetly invoked function expression)


//   (function(){
//     console.log('Work!');

//   })();


//   //promise code

// let promise = new Promise((reject,resolve) =>{

//   let success = true;

//   if(success){
//     resolve("Work done!")

//   }else{

//     reject("Not Done!");
//   }
// })

// promise
// .then(result => console.log(result))
// .catch(error => console.log(error));


//async await code


// async function myFun() {
  
//   try {

//     let result = await promise;
    
//   } catch (error) {
//     console.log(error);
//   }
// }


//fetch api 

// const MyProduct = new Promise((resolve, reject) =>{

//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => resolve(data))
//   .catch(error => reject(error));
// });

// MyProduct
// .then(result => console.log(result))
// .catch(error => console.log("Error :" ,error));


//second way async await

// async function getPost() {
  
//   try {

//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     console.log(data);
    
//   } catch (error) {
//     console.log("Error:" , error);
//   }
// }

// getPost();

// document.getElementById('parent').addEventListener('click', () => {

//   console.log("Parent Clicked");

// }, true);

// document.getElementById('child').addEventListener('click', () =>{

//   console.log("Child clicked");
// });


//higer order function

// function greet(name){
//   return "Heloo" + name;
// }

// function higherOrderFunction(fun, name){

//   return fun(name);
// }

// console.log(higherOrderFunction(greet, "Raunak"))

console.log('5' == 5);
console.log('5' === 5);