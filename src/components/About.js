import React from 'react'
import { useLocation } from 'react-router-dom';
import image from './images/image.jpg'
function About() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div className='box'>
        <img src={image} alt={image} className='pro' id='image' />
        <div className='about'>
          <h5>I am a Software Engineer at <span>Zenarate India Private Limited</span> and a <span>B.Tech</span> graduate in <span>Mathematics and Computing</span> from <span>Delhi Technological University (DTU'26)</span>.</h5>

          <h5>I am passionate about building scalable backend systems and solving complex engineering problems. My experience includes developing REST APIs and backend services using <span>Python, Flask, and SQL</span>, along with automating data-processing workflows using <span>AWS Glue</span>.</h5>

          <h5>I enjoy turning real-world requirements into reliable, maintainable software and continuously improving system performance and efficiency. I have also built full-stack applications using <span>React.js, Node.js, Express.js, and MongoDB</span>, giving me experience across both frontend and backend development.</h5>

          <h5>Alongside software development, I have a strong interest in <span>Data Structures & Algorithms and problem solving</span>, with <span>500+ LeetCode problems solved</span>.</h5>

          <h5>I am always interested in learning new technologies, working on challenging engineering problems, and building products that create meaningful impact.</h5>
        </div>
      </div>

    </>
  )
}

export default About
