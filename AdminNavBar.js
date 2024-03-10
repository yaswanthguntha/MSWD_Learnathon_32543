import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavBar() 
{
  return (
    <div>
        <nav>
            <div className="logo">
                <img src="./logo.png" alt="logo"></img>
                <span className="logo-name">ART ZONE</span>
            </div>
            <div className="nav-block1">
                <Link to="/adminhome">Home</Link>
                <Link to="/adminlogin">Logout</Link>
            </div>
            <div className="profile">
                <img style={{width:"50px"}} src="./admin.png" alt="profile"/>
            </div>
        </nav>
    </div>
  )
}