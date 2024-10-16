import React from 'react'
import avatar from '../assets/images/avatar.jpg'
import CV from '../assets/Download/CV_Spaawat.pdf'

const FeaturedBox = () => {
  return (
    <div>
     <section className='featured-box' id="home">
      <div className='featured-text'> 
        <div className='featured-text-card'>
          <span>Sappawat Padtong</span>
        </div>

        <div className='featured-name'>
          I'm <span className='typedText'></span>
        </div>
        <div className='featured-text-info'>
          <p>
            Currenly i'm a Student of Solfware engineer in Rojaphat Nakorn Pathom 
            , ready to start to learn new thing.
            Next year I'm going to start to make the project of the university.
            Want to learn the new thing, Can work under pressure. Frindly with anybody.
            Before i was oversea volunteer in Tanzania , that mean i can speak English in level
            of speaking and can understand the conversation in normal level.
          </p>
        </div>
        <div className='featured-text-btn'>
      <button className='btn'>
            Download CV <i className='uil uil-import'></i>
          </button>
      </div>


      <div className='social_icons'>
      <div className='icon'>
        <a href="https://www.facebook.com/keroro.kokoro.3">
          <i className='uil uil-facebook'></i>
        </a>
      </div>

      <div className='icon'>
        <a href="https://www.instagram.com/fam_sp/">
          <i className='uil uil-instagram'></i>
        </a>
      </div>

      <div className='icon'>
        <a href="https://github.com/FamSP">
          <i className='uil uil-github'></i>
        </a>
      </div>
      </div>
    
      </div>
      

      <div className='featured-image'>
        <div className='image'>
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div>
        <div className='scroll-icon-box'>
         <a href='#about' className='scroll-btn'>
          <i className='uil uil-mouse-alt'></i>
          <p>Scroll Down</p>
          </a>   
        </div>
      </div>
     </section>
    </div>

  )
}

export default FeaturedBox
