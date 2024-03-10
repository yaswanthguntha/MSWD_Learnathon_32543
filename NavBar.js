import React from 'react'
import './navbar.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import CustomerLogin from './../authentication/CustomerLogin'
import ArtistLogin from './../authentication/ArtistLogin'
import Register from './../authentication/Register'
import ForgetPassword from '../authentication/ForgetPassword'
import ArtistRegister from '../authentication/ArtistRegister'
import ShowNavBar from './ShowNavBar'
import Explore from './Explore';
import AdminLogin from '../authentication/AdminLogin'
import CustomerHome from '../customer/CustomerHome'
import ArtistHome from '../artist/ArtistHome'
import AdminHome from '../admin/AdminHome'
import CustomerDetails from '../admin/CustomerDetails'
import ArtistDetails from '../admin/ArtistDetails'


export default function NavBar() 
{
  return (
    <div>

        <ShowNavBar>
        <nav>
            <div className="logo">
                <img src="./logo.png" alt="logo"></img>
                <span className="logo-name">ART ZONE</span>
            </div>
            <div className="nav-block1">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-button">
                <div className="login-button">
                    <Link to="/customerlogin">Login</Link>
                </div>
                <div className="register-button">
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>
        </ShowNavBar>

        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/explore" element={<Explore/>} exact/>
            <Route path="/about" element={<About/>} exact/>
            <Route path="/contact" element={<Contact/>} exact/>
            <Route path="/customerhome" element={<CustomerHome/>} exact/>
            <Route path="/artisthome" element={<ArtistHome/>} exact/>
            <Route path="/adminhome" element={<AdminHome/>} exact/>
            <Route path="/viewcustomers" element={<CustomerDetails/>} exact/> 
            <Route path="/viewartists" element={<ArtistDetails/>} exact/> 
            <Route path="/customerlogin" element={<CustomerLogin/>} exact/>
            <Route path="/artistlogin" element={<ArtistLogin/>} exact/>
            <Route path="/adminlogin" element={<AdminLogin/>} exact/>
            <Route path="/forgetpassword" element={<ForgetPassword/>} exact/>
            <Route path="/register" element={<Register/>} exact/>
            <Route path="/artistregister" element={<ArtistRegister/>} exact/>
        </Routes>

    </div>
  )
}