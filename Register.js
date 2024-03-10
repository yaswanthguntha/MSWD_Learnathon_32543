import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Register() 
{

  const [registrationData, setRegistrationData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    contact: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) =>
  {
    setRegistrationData({...registrationData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/insertcustomer', registrationData);
      if (response.status === 200) 
      {
        setRegistrationData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          contact: '',
          password: ''
        });
        navigate("/customerlogin")
      }
      setMessage(response.data);
      setError(''); 
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); 
    }
  };

  return (
    <div className="auth-page">
      <div className="right">
        <div className="auth-logo">
          <Link to="/"><img src="./logo2.png" alt="logo"></img></Link>
        </div>
        <img className='welimg' src="registerimg.png" alt="image_here"></img> <br/>
        <p className="welcome">Register & Join</p>
        <p className="quote">The family of arts to make<br/>your experience awful with us</p>
      </div>
      <div className="left">
          <form align="center" className="register-form" onSubmit={handleSubmit}>
            <p className="heading">Register</p>
            <input onChange={handleChange} value={registrationData.fullname} id="fullname" className="input" type="text" placeholder="Enter Full Name" required/> <br/>
            <input onChange={handleChange} value={registrationData.email} id="email" className="input" type="email" placeholder="Enter Email ID" required/> <br/>
            <div className="label">
              <label style={{marginTop:"4%"}}>Gender</label>
              <select style={{margin:"0px"}} onChange={handleChange} value={registrationData.gender} className="dob input" id="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div> 
            <div className="label">
              <label style={{marginTop:"4%"}}>Birth Date</label>
              <input style={{margin:"0px",width:"52%"}} onChange={handleChange} value={registrationData.dateofbirth} id="dateofbirth" className="input" type="date" required/>
            </div>
            <input onChange={handleChange} value={registrationData.contact} id="contact" className="input" type="number" pattern="[6789][0-9]{9}" placeholder="Enter Contact" required/> <br/>
            <input onChange={handleChange} value={registrationData.password} id="password" className="input" type="password" placeholder="Enter Password" required/> <br/>
            <button  className="btn" type='submit' >Register</button>
          </form>
          <p className="new">Want to Publish art? <Link to="/artistregister">Register as Artist</Link></p>
      </div>
    </div>
  )
}