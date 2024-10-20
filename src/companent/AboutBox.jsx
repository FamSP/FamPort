import React from 'react'
import cv_sappawat from '../assets/Download/CV_Spaawat.pdf'


const AboutBox = () => {
  return (
    <section className='section' id='about'>
    <div className='top-header'>
      <h1>About ME</h1>
    </div>
    <div className='row'>
      {/**About Me */}
      <div className='col'>
        <div className='about-info'>
            <h3>My Introduction</h3>
            <p>Currenly i'm a Student of Solfware engineer in Rojaphat Nakorn Pathom 
            , ready to start to learn new thing.
            Next year I'm going to start to make the project of the university.
            Want to learn the new thing, Can work under pressure. Frindly with anybody.
            Before i was oversea volunteer in Tanzania , that mean i can speak English in level
            of speaking and can understand the conversation in normal level.</p>

             <div className="about-btn">
          <a href={cv_sappawat} target='_blank'>
          <button className='btn'>
            Download CV <i className='uil uil-import'></i>
          </button>
          </a>
        </div>
        </div>
      </div>


        {/**Skills */}
      <div className='col'>


        <div className='skills-box'>
          <div className='skill-header'>
            <h3>Frontend</h3>
          </div>
          <div className='skills-list'>
            <span>HTML</span>
            <span>CSS</span>
            <span>PHP</span>
            <span>Bootstarp</span>
            <span>React</span>
            <span>Taiwin</span>
          </div>
        </div>


        <div className='skills-box'>
        <div className='skill-header'>
          <h3>Backend</h3>
        </div>
        <div className='skills-list'>
          <span>PHP</span>
          <span>JavaScript</span>
        </div>
        </div>


        <div className='skills-box'>
        <div className='skill-header'>
           <h3>Database</h3>
        </div>
        <div className='skills-list'>
          <span>MySQL</span>
          <span>MongoDB</span>
        </div>
        </div>
      </div>
    </div>
    </section>
  )}

export default AboutBox
