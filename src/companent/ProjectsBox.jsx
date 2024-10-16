import React from 'react'

const ProjectsBox = () => {
  return (
    <section className='section' id='project'>
      <div className='top-header'>
        <h1>Project</h1>
      </div>
      <div className='project-container'>
        <div className='project-box'>
          <i className='uil uil-briefcase-alt'></i>
          <h3>Complate</h3>
          <label>15+ Finish projects</label>
        </div>


        <div className='project-box'>
        <i className='uil uil-clinet-alt'></i>
          <h3>cilnet</h3>
          <label>25+ Happy Clinets</label>
        </div>


        <div className='project-box'>
        <i className='uil uil-briefcase-alt'></i>
          <h3>Experients</h3>
          <label>4+ Year exprients</label>
        </div>
      </div>
    </section>
  )
}

export default ProjectsBox
