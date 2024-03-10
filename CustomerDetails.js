import React, { useState,useEffect } from 'react'
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

export default function CustomerDetails() 
{
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get('http://localhost:2032/viewcustomers');
            setCustomers(response.data);
        }
        catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
      fetchCustomers();
    }, []);

    const deleteCustomer = async (email) => {
        try {
            await axios.delete(`http://localhost:2032/deletecustomer/${email}`);
            fetchCustomers();
        }
        catch (error) {
            console.error(error.message);
        }
    }
    

  return (
    <div style={{ textAlign: 'center' }}>
      <AdminNavBar/>
      <h1 className="info">Customers</h1>
      <div align="center">
      <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(customers) && customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.fullname}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.dateofbirth}</td>
                  <td>{customer.email}</td>
                  <td>{customer.contact}</td>
                  <td>
                    <button onClick={() => deleteCustomer(customer.email)} className='button'><img className="delete" src="./delete.png" alt="delete" /></button>
                  </td>
                </tr>
              ))
              ) : (
                <tr>
                  <td colSpan="7">Data Not Found</td>
                </tr>
              )}
          </tbody>
        </table>
        </div>
    </div>
  )
}