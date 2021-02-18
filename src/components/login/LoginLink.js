import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const LoginLink = ({ link }) => {
  return (
    <div className='col-md-2 mt-50 pr-50'>
      <div className='login-button'>
        <Link to={link} className='btn login-btn btn-primary'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default LoginLink
