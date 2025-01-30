import React from 'react'
import './Project.css'
const Projects = () => {
  return (
    <><h2 className='Projects'>Projects</h2>
    
    <div id="Projects" className='projects-container'>
        <div className='project1'>
            <img className='img1' src='/Assets/Dev.jpg' alt='devimage'/>
            <h3>Netflix Clone</h3>
            <p>A full-featured Netflix clone built with React, Firebase, and TMDB API. 
            Features include user authentication, movie browsing, and responsive design.</p>
        </div> 
        <div className='project2'>
            <img className='img2' src='/Assets/Dev1.jpg' alt='dev1pic'/>
            <h3>Inshorts Clone</h3>
            <p>A news aggregator app inspired by Inshorts, featuring bite-sized news articles and a clean interface.</p>
        </div>
    </div>
    </>
  )
}

export default Projects