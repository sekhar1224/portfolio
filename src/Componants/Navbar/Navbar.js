import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <h2 className='sekhar-portfolio'>Sekhar Portfolio</h2>
        <div className='navbar-link'>
            <a href='#Home'><li>Home</li></a>
            <a href='#Technologies'><li>Technologies</li></a>
            <a href='#Skills'><li>Skills</li></a>
            <a href='#Projects'><li>Projects</li></a>
            <a href='#Contact'><li>Contact</li></a>
        </div>
    </div>
    // <div className='Navbar'>
    //   <li><Link to='/login'>Login</Link></li>
    //   <li><Link to='/registration'>registration</Link></li>
    //   <li><Link to='/technologies'>Technologies</Link></li>
    //   <li><Link to='/about'>About</Link></li>
      

    // </div>
  )
}

export default Navbar