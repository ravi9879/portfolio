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
          <h3> I am A Enthusiastic <span>B.Tech</span>  student from <span>Delhi Technological University (DTU'26)</span>  In The Field Of <span>Mathematics And Computing(MCE)</span>.</h3>
          <h3> A passionate developer, I thrive on problem-solving and love crafting innovative solutions. Collaborating with like-minded individuals excites me, as it brings out the best in our creations. With a growth-oriented mindset, I actively participate in hackathons and coding competitions. Exploring the latest tech trends keeps me ahead of the curve. My goal is to make a positive impact through technology, creating dynamic web applications that leave a lasting impression. Open to exciting opportunities, let's collaborate and build something extraordinary together!</h3>
        </div> 
      </div>

    </>
  )
}

export default About