import React from 'react'
import './Technologies.css'

function Technologies() {
  return (
    <>
      <h2 className='technologies'>Technologies</h2>
      <div className='container'>
        <div className='card'>
          <h3>Frontend Development</h3>
          <p>React, Angular, JavaScript, TypeScript, Tailwind CSS, Material UI, AntD UI.</p>
        </div>
        <div className='card'>
          <h3>Backend Development</h3>
          <p>Node.js, Express, MongoDB, SQL, PostgreSQL</p>
        </div>
        <div className='card'>
          <h3>UI/UX Design</h3>
          <p>Figma, Adobe XD</p>
        </div>
        <div className='card'>
          <h3>Web Technologies</h3>
          <p>HTML5, CSS3, JavaScript, Typescript, React Js, Anuglar</p>
        </div>
        <div className='card'>
          <h3>Desktop Development</h3>
          <p>Electron, React Desktop</p>
        </div>
        <div className='card'>
          <h3>Mobile Development</h3>
          <p>React Native</p>
        </div>
        <div className='card'>
          <h3>DevOps</h3>
          <p>CI/CD, Git, GitHub</p>
        </div>
        <div className='card'>
          <h3>Cloud Services</h3>
          <p>AWS, Vercel</p>
        </div>
      </div>
    </>
  )
}

export default Technologies
