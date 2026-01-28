// import React, { useState, useEffect } from 'react'

// const Effect = () => {
//   const [count, setCount] = useState(0)
//   const [users,setUsers]=useState([])

//   useEffect(() => {
//     // console.log('from useEffect')
//     fetch('https://jsonplaceholder.typicode.com/users')
//     // api fetch and to json formate
//     .then((response)=>{
//       return response.json()
//     })
//     .then((data)=>
//       // console.log(data)
//     setUsers(data))
//   },[])

//   return (
//     <>
//       <div>
//         <h1>useEffect</h1>
//         <h2>Count: {count}</h2>
//         <button onClick={() => setCount(prev=>prev+1)}>+</button>
//         <h1>Users</h1>
// {/* "map" array without loop accesss using map */}
// {/* instead of curly braces use normal bracesinnmap (i.e )after map using bracket */}
//         <ul>
//           {users.map((user)=>(
//             <li>Name:{user.name} Emmail:{user.email}
//             <hr /> </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default Effect
