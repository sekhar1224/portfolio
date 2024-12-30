import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <h1>Welcome to login page</h1>
        <Link to={'/registration'}>
        <button>registration</button></Link>
    </div>
  )
}

export default Login