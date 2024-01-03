import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='mt-24'>
      <h1>{userid}</h1>
      <p>John Doe</p>
    </div>
  )
}

export default User
