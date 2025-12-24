import React from 'react'

export const userData = {
    firstName: 'Hamza',
    lastName: 'LAMBARA',
    title: 'Software Engineer'
  }
  
export default function User() {
  return (
    <div id="user">
        
        <h2>{userData.firstName} {userData.lastName}</h2>
        <p>{userData.title}</p>
      </div>
  )
}
