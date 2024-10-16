import React from 'react'

const Footer = () => {
  return (
   <footer >
    <div className='top-footer'>
    <h1>Sappwat Padtong.</h1>
    </div>
    <div className="middle-footer">
      <ul className='footer-menu'>
        <li className='footer_menu_list'><a href='#home'>Home</a></li>
        <li className='footer_menu_list'><a href='#about'>About</a></li>
        <li className='footer_menu_list'><a href='#project'>Projects</a></li>
        <li className='footer_menu_list'><a href='#Scontact'>Contact</a></li>
      </ul>
    </div>

    <div className="footer-social-icons">
      <div className='icon'> <a href="https://www.facebook.com/keroro.kokoro.3">
          <i className='uil uil-facebook'></i>
        </a></div>
      <div className='icon'><a href="https://www.instagram.com/fam_sp/">
          <i className='uil uil-instagram'></i>
        </a></div>
      <div className='icon'><a href="https://github.com/FamSP">
          <i className='uil uil-github'></i>
        </a></div>
    </div>

    <div className="bottom-footer">
      <p>Coptright ©
      <a href="#home">Sappwat</a>
      - All right reserved</p>
    </div>
   </footer>
  )
}

export default Footer
