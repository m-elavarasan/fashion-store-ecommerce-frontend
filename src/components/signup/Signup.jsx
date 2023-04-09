import React from 'react'
import "./Signup.css";
const Signup = () => {
  return (
    <div className='signup'>
    <h1>Sign up </h1>
     <form>
        <input type='Name' placeholder='Name' />
        <input type='Email' placeholder='Email' />
        <input type='password' placeholder='password' />
        <button type='submit'>signup</button>

     </form>
     </div>
  )
}

export default Signup
