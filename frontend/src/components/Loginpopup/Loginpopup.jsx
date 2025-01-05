import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setShowLogin}) => {
    const [currState,setCurrentState]=useState("Sign up")
  return (
    <div className="loginpopup">
    <form action="" className='login-container'>
        <div className='login-title'>
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

        </div>
        <div className="login-inputs">
        {currState=="Login"?<></>:
          <input type="text" placeholder='Your name' required />}
          <input type='email' placeholder='Your email' required/>
          <input type="password" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign up"?"Create Account":"Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing,I agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"?
        <p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span></p>:
        <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
    </form>

    </div>
  )
}

export default Loginpopup