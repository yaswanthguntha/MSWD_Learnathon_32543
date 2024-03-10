import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function ArtistRegister() {

  const [FormData, setFormData] = useState({
    fullname : "",
    gender : "",
    dateofbirth : "",
    email : "",
    contact : "",
    graduation : "",
    artistname : "",
    description : "",
    socialmedialinks : "",
    password : "",
  })

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleChange = (e) => 
  {
    setFormData({...FormData, [e.target.id]: e.target.value});
  }

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/insertartist', FormData);
      if (response.status === 200) 
      {
        setFormData({
          fullname : "",
          gender : "",
          dateofbirth : "",
          email : "",
          contact : "",
          graduation : "",
          artistname : "",
          description : "",
          socialmedialinks : "",
          password : "",
        });
        navigate("/artistlogin")
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
    <div className="background">
      <div className="auth-logo">
        <Link style={{color:"#D6EDFF"}} to="/register">Back</Link>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-left">
          <h3 className="head">Artist Registration</h3>
          <input onChange={handleChange} value={FormData.fullname} id='fullname' className="input" type="text" placeholder="Enter Full Name" required/> <br/>
          <div className="label">
            <label style={{marginTop:"4%"}} onChange={handleChange} value={FormData.gender} id='gender'>Gender</label>
            <select style={{margin:"0px"}} className="dob input" id="gender" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div> 
          <div className="label">
            <label style={{marginTop:"4%"}}>Birth Date</label>
            <input style={{margin:"0px",width:"52%"}} onChange={handleChange} value={FormData.dateofbirth} id='dateofbirth' className="input" type="date" required/>
          </div>
          <input onChange={handleChange} value={FormData.email} id='email' className="input" type="email" placeholder="Enter Email ID" required/> <br/>
          <input onChange={handleChange} value={FormData.contact} id='contact' className="input" type="number" pattern="[6789][0-9]{9}" placeholder="Enter Contact" required/> <br/>
          <div className="label">
            <label style={{marginTop:"4%"}}>Graduation</label>
            <select  style={{margin:"0px"}} className="dob input" onChange={handleChange} value={FormData.graduation} id="graduation" required>
              <option value="">Select Here</option>
              <option value="N/A">N/A</option>
              <option value="B. Arts">B. Arts</option>
              <option value="B. Fine Arts">B. Fine Arts</option>
              <option value="M. Arts">M. Arts</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-right">
          <input onChange={handleChange} value={FormData.artistname} id='artistname' className="input" type="text" placeholder="Enter Artist Name" required/> <br/>
          <textarea onChange={handleChange} id='description' value={FormData.description} className="area" placeholder="Breif your Biography" required />
          <input onChange={handleChange} value={FormData.socialmedialinks} id='socialmedialinks' className="input" type="text" placeholder="Social Media Links(if any)" /> <br/>
          <input onChange={handleChange} value={FormData.password} id='password' className="input" type="password" placeholder="Create Password" required/> <br/>
          <input className="input" type="password" placeholder="Confirm Password" required/> <br/>
          <button style={{marginBottom:"10px"}} className="btn" type='submit' >Register</button>
        </div>
      </form>
    </div>
  )
}