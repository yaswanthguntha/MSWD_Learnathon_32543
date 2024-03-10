import React from 'react'
import Explore from './../navbar/Explore';
import CustomerNavBar from './CustomerNavBar';

export default function CustomerHome() {
  return (
    <div>
      <CustomerNavBar/>
        <Explore/>
    </div>
  )
}