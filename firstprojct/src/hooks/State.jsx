// import React from 'react'
// import { useEffect,useState } from 'react'


// const State = () => {
//   //const [count,setCount]=useState(0)
//    //render-dom element use manipulate -render
//   //  const [count1,setCount1] = useState(0)
//   //  const [count2,setCount2]=useState(0)
//   const [count,setCount]=useState(0)
//   const [like,setLike]=useState(0)
//    useEffect(()=>{
//     console.log(" from useEffect")
//    },[like])

// //   return (
// //     <div>
// //     <h1>useState example</h1>
// //     <h2>Count:{count}</h2>
// //     <button onClick={()=> setCount(count+1)}>Increase</button> 
// //     <br />
// //     <button onClick={()=> setCount1(count1+1)}>🩷{count1}</button>  <br />

// //     <button onClick ={()=>setCount2(count2+1)}>👎{count2}</button>
    

// //     </div>
// //   )
// // }
// return (
//   <div>
//     <h3>UseState Example</h3>
//     <h3>Count:{count}</h3>
//     <button onClick ={()=>setCount(count+1)}>Increment</button>
//     <h3>LIKE:{like}</h3>
//    <button onClick ={()=>setLike(like+1)}>Increment</button>

//   </div>
// )
// }
// export default State

import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    const [dislike,setDislike]=useState(0)
  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <h2 onClick={()=>setLike(like+1)}>👍{like}</h2>
    <h2 onClick={()=>setDislike(dislike+1)}>👎{dislike}</h2>
    </>
  )
}

export default State
