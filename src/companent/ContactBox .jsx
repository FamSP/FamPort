import React from 'react'

const ContactBox  = () => {
  return (
<section className='section' id='contact'>
  <div className='top-header'>
    <h1>Get in Touch</h1>
    <span>Do you have a project in your mind, contact me.</span>
  </div>
    <div className="row">
      <div className="col">
        <div className="contact-info">
          <h2>Find Me<i className='uil uil-corner-right-down'></i></h2>
          <p><i className='uil uil-envelope'>Email: tame2543@gmail.com</i></p>
          <p><i className='uil uil-phone'>Tel: +6698-380-9919</i></p>
        </div>
      </div>


      <div className="col">
        <div className="form-control">
          <div className='form-input'>
            <input type="text" className="input-field" placeholder='Name' />
            <input type="text" className="input-field"  placeholder='Email'/>
          </div>
        
        <div className='text-area'>
          <textarea placeholder='Message'></textarea>
        </div>
        <div className="form-button">
          <button className='btn'>
            Send <i className='uil uil-message'></i>
          </button>
          </div>
        </div>
      </div>
    </div>
</section>
  )
}

export default ContactBox 
