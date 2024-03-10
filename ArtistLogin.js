import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'
import axios from 'axios';

export default function ArtistLogin() {

  const [artistData, setArtistData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setArtistData({ ...artistData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/checkartistlogin', artistData);
      if (response.data!=null) 
      {
        console.log(response.data)
        navigate("");
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className="auth-page">
      <div className="left">
        <div className="auth-logo">
        <Link to="/"><img src="./logo.png" alt="logo"></img></Link>
        </div>
        <form align="center" className="login-form" onSubmit={handleSubmit}>
          <p className="heading">Artist Login</p>
            <div className="shift-login">
              <Link to="/customerlogin">Customer</Link>
              <Link to="/artistlogin">Artist</Link>
            <div className="animation start-artist"></div>
          </div>
          <input id="email" value={artistData.email} onChange={handleChange} className="input" type="email" placeholder="Enter Email ID" required/> <br/>
          <input id="password" value={artistData.password}  onChange={handleChange} style={{marginBottom:"0px"}} className="input" type="password" placeholder="Enter Password" required/> <br/>
          <Link style={{marginBottom:"20px"}} className="forget" to="/forgetpassword">Forget Password?</Link>
          <button className="btn">Login</button>
        </form>
        <p className="new">New User? <Link to="/artistregister">Create account</Link></p>
      </div>
      <div className="right">
        <img className="welimg" src="./loginpageimg.jpg" alt="image_here" /> <br/>
        <p className="welcome">Welcome</p>
        <p className="quote">The soul should always stand ajar,<br/> ready to welcome the ecstatic experience.</p>
      </div>
    </div>
  )
}