import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerNavBar() {
  return (
    <div>
        <nav>
            <div className="logo">
                <img src="./logo.png" alt="logo"></img>
                <span className="logo-name">ART ZONE</span>
            </div>
            <div className="nav-block1">
                <Link to="/customerhome">Home</Link>
                <Link to="/favorites">Favourites</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/customerlogin">Logout</Link>
            </div>
            <div className="profile">
                <img style={{width:"50px"}} src="./profile.png" alt="profile"/>
            </div>
        </nav>
    </div>
  )
}