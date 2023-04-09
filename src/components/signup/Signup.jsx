import React from 'react'
import "./Signup.css";
const Signup = () => {
  return (
    <div className='signup'>
    <h1>Sign up </h1>
     <form>
        <input type='email' placeholder='email' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='confirm password' />
        <button type='submit'>signup</button>
     </form>
     </div>
  )
}

export default Signup
