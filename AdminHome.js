import React from 'react'
import AdminNavBar from './AdminNavBar';
import './admin.css'
import { Link } from 'react-router-dom';

export default function AdminHome() {
  return (
    <div>
      <AdminNavBar/>
      <div className="admin-home">
        <Link to="/viewcustomers"><h3 className="operations">Customer Details</h3></Link>
        <Link to="/viewartists"><h3 className="operations">Artist Details</h3></Link>
      </div>
    </div>
  )
}