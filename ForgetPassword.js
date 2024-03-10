import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <div className="auth-page">
        <div className="left">
        <div className="auth-logo">
            <Link to="/customerlogin">Back</Link>
            </div>
            <form align="center" className="forget-form">
                <p className="heading">Change Password</p>
                {/* <input className="input" type="email" placeholder="Enter Email ID" required/> <br/> */}
                <input style={{margin:"0px"}} className="input" type="number" placeholder="Enter OTP" required/>
                <i style={{marginBottom:"20px",fontSize:"12px"}}>A 6-digit OTP has sent to your mail</i>
                <input className="input" type="password" placeholder="Enter Password" required/> <br/>
                <input className="input" type="password" placeholder="Confirm Password" required/> <br/>
                <button className="btn">Change</button>
            </form>
        </div>
        <div className="right">
            <img className='welimg' src="./forget.png" alt="image_here"/> <br/><br/>
            <p style={{fontSize:"17px"}} className="welcome">Try to remember your password next time</p>
        </div>
    </div>
  )
}