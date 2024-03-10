import React from 'react'
import { Link } from 'react-router-dom'

export default function ArtistNavBar() {
  return (
    <div>
        <nav>
            <div className="logo">
                <img src="./logo.png" alt="logo"></img>
                <span className="logo-name">ART ZONE</span>
            </div>
            <div className="nav-block1">
                <Link to="/artisthome">Home</Link>
                <Link to="/myartwork">My Artwork</Link>
                <Link to="/publish">Publish</Link>
                <Link to="/artistlogin">Logout</Link>
            </div>
            <div className="profile">
                <img style={{width:"50px"}} src="./profile.png" alt="profile"/>
            </div>
        </nav>
    </div>
  )
}