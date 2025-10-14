console.log("map for mathematical logic")
 function double(num)
 {
   return num*2;
 }
 let arr1=[2,3,4,5,6,7]
 let doubleledArr=arr1.map(double);
 console.log(doubleledArr);
 const tripledArr=arr1.map((n)=>n*3);//using arrow function
 console.log(tripledArr);

console.log(" ODD Number");
 let arr2=[2,3,4,5,6,7]
 function isOdd(num)
 {
 return num%2!==0;
 }
 let oddNumber=arr2.filter(isOdd);// fiter the array according to the condition
 console.log(oddNumber);

console.log("Mutiple of Five in a array");
  let arr3=[13,15,20,35,27]
  function multiple(num)
  {
   return num%5==0;
  }
  const multiplesoffiveArr =arr3.filter((n)=>n%5==0);// fiter + arrow function
  console.log(multiplesoffiveArr);


 //map return array
 //filter rturn array
 //reduce return single value if array gives 
//  why these methods are using means in react instead of loop we use the "array methods"

console.log("Reduce");
 let array1=[1,2,3,4,5,6,7];
  let sum1=array1.reduce((product,current)=>{
  return product*current}
  ,1);
  console.log(sum1);

// TASK
console.log("Sum of Tripled Even Numbers");
let arr=[1,2,3,4,5,6,7];
let trippledArr =arr.map((n)=>n*3);
let evenArr =trippledArr.filter((n)=>n%2==0);
let sum =evenArr.reduce((product,current)=>{return product+current},0);
console.log(sum);

//task in single line
console.log("Singe line code SOTEN");
 let a=[1,2,3,4,5,6];
 let ans =a.map((n)=>n*3).filter((n)=>n%2==0).reduce((sum,cur)=>{return sum+cur},0);
 console.log(ans);

 console.log("Destructuring");//assigning array elements to single variable
 let b=[1,2,3,4,5];
 const [one,,,,two]=b;
 console.log(two);
 // here in one=1,space separaed contains one value 

 console.log("Rest Operater");
 let c=[1,2,3,4,5];
 const [start,...end]=c;
 console.log(end);
 // assign one value using one variable remaining value can stote in single variable 
//  by using the three dots before the variable(eg:...end);

console.log("Spreed");//by using these we can merge two arrays
let num = [0,...b,6,7];
console.log(num);

console.log("spreed for merging two objects");
const obj1={x:3,y:4}
const obj2={y:4,z:8}
const spreed ={...obj1,...obj2}
console.log(spreed);

// macro task- Eg :setTimeOut()
// micro task
// future value 
// exist in 3 state 1.sucess(print from resolve block) 2.failure(print from ) 3.pending
// microtask complte after only macro task run


console.log("Micro and Macro task // PROMISE");
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
    const success=true;
    if(success){
        resolve("Resolved Successfully");
    }
    else{
        reject('rejected');
    }
    },2000);
});

    console.log("Before Promise Execution");
    promise.then((result)=>console.log(result))
           .catch(err=>console.log(err))
           .finally(()=>{console.log("Promises completed");})
    
    console.log("After promises execution");
    // for mutiple object accesing we use fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{return response.json()})
      .then((data)=>console.log(data))
      .catch((err)=>console.log(err));

      //API Fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{return response.json()})
      .then((data)=>data.map((user)=>{console.log(user.name);}))
      .catch((err)=>{console.log(err);})

      // Asyn function
      // asyn promise return
      // awit 
      async function fetchApi() {
        try{
          const response = await fetch(
'https://jsonplaceholder.typicode.com/users'
          )
          const data=await response.json();
          data.map((user) => {
            console.log(user.name)
          })
        }
        catch (error)
        {
          console.log(error);
        }
        
      }
 fetchApi();  
 
//  String literals
let name='name'
let age =24
console.log(`I am ${name} and my age is $(age)`);
// instead of using + we can use like this
console.log("i am"+name+"and my age is"+age);


