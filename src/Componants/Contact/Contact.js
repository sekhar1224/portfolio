import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <h3 className='Contact'>Contact</h3>
      <div id='Contact' className='contact-main-container'>
        <div className='contact-green'>
          <div className='contact-deatails'>
            <p><b>Get In Touch</b> <br/><br/>Sekharkumar0722gmail.com<br/>9550945732</p>
          </div>
        </div>
        <div className='contact-red'>
          <div className='Contact-Form'>
            <label>Name</label><br/>
            <input />
          </div>
          <div className='Contact-Form'>
            <label>Email</label>
            <input />
          </div>
          <div className='Contact-Form'>
            <label>
                message
            </label>
            <textarea />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
