// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Home.css'

// const Home = () => {
//   return (
//     <>
//     {/* <div class="first">Home</div>
//     <div class ="second">
//      <h2>Hello, It's Me</h2>
//     <h1>RASIGAPRIYASELVARAJ</h1>
//     <h2>I am an Aspiring Full Stack Developer</h2>
//     <p>I’m Rasigapriya — a web development enthusiast focusing on <br />  
//      Full Stack and MERN Stack technologies.  <br />
//      I love learning, experimenting, and growing as a developer every day.</p>
//      </div> */}
     
//      <ul>
//       <li>
//         <Link to ='/State'>useState</Link>
//         <br></br>
//         </li>
//         <li>       
//            <Link to='/effect'>useEffect</Link>
//         </li>

      
//      </ul>
    
//     </>

//   )
// }

// export default Home

import React from 'react'
import Parent from '../components/ParentComponent'
import Profile from '../components/Profile'
import State from '../hooks/State'
import Form from '../hooks/Form'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import ParentComponent from '../components/ParentComponent'
import { userContext } from '../App'
import { useState } from 'react'



const Home = () => {
  const [user,setUser]=useState("abcd")
  return (
    <div>
   
    <Link to ={"/form"}>Form</Link><br></br>
    <Link to ={"/state"}>useState Example</Link><br></br>
    <Link to ={"/reducer"}>useReducer Example</Link><br></br>
     <userContext.Provider value ={user}>
      <Profile 
       age={19} 
       skills={["HTML","CSS","JS"]} />
       </userContext.Provider>
        <Parent/>
    </div>
  )
}

export default Home