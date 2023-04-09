import { useRef , useState } from 'react';
import "C:/Users/SUDHARSANAN S R/Desktop/nextjs/Fashion-store/src/components/LoginSignupContainer.jsx/LoginSignupContainer.css"
import Signup from '../signup/Signup';
import Login from '../Login/Login';
const LoginSignupContainer = () => {


    const [login, setlogin] =useState(true);

    const LoginSignupContainerRef = useRef(null);
    const handleClick = ()=>{
      setlogin(!login);
      LoginSignupContainerRef.current.classList.toggle("active"); 
    };

  return (
    <div className='login-signup-container' ref={LoginSignupContainerRef}>
      <Login />
       <div className='side-div'>
        <button type='button' onClick={handleClick}>{login ? "signup" : "login"}
        </button>
     </div>
     <Signup/>
    </div>
  )
}

export default LoginSignupContainer
