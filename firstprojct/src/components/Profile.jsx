import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'

const Profile = ({ age, skills }) => {
  const name =useContext(userContext)
  return (
    <div>
      <h1>I am {name} and {age} years old</h1>

      <ul>
        {skills.map((skill,index) => (
          <li key={index} >{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Profile