import React, { useState,useEffect } from 'react'
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

export default function ArtistDetails() 
{
    const [artists, setArtists] = useState([]);

    const fetchArtists = async () => {
        try {
            const response = await axios.get('http://localhost:2032/viewartist');
            setArtists(response.data);
        }
        catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
      fetchArtists();
    }, []);

    const deleteArtist = async (email) => {
        try {
            await axios.delete(`http://localhost:2032/deleteartist/${email}`);
            fetchArtists();
        }
        catch (error) {
            console.error(error.message);
        }
    }
    

  return (
    <div style={{ textAlign: 'center' }}>
      <AdminNavBar/>
      <h1 className="info">Artists</h1>
      <div align="center">
      <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Graduation</th>
              <th>Artist Name</th>
              <th>Description</th>
              <th>Social Media Links</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(artists) && artists.length > 0 ? (
              artists.map((a, index) => (
                <tr key={index}>
                  <td>{a.fullname}</td>
                  <td>{a.gender}</td>
                  <td>{a.dateofbirth}</td>
                  <td>{a.email}</td>
                  <td>{a.contact}</td>
                  <td>{a.graduation}</td>
                  <td>{a.artistname}</td>
                  <td>{a.description}</td>
                  <td>{a.socialmedialinks}</td>
                  <td>
                    <button onClick={() => deleteArtist(a.email)} className='button'><img className="delete" src="./delete.png" alt="delete" /></button>
                  </td>
                </tr>
              ))
              ) : (
                <tr>
                  <td colSpan="10">Data Not Found</td>
                </tr>
              )}
          </tbody>
        </table>
        </div>
    </div>
  )
}