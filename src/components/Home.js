import React from 'react'
import Personal from './images/Personal.jpg'
import linkedin from './images/linked.png'
import insta from './images/insta.png'
import fb from './images/fb.png'
import Pic from './images/Pic.jpeg'
import github from './images/github1.png'
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';

function Portfolio() {

  // let p1 = document.getElementById('resume');
  // p1.addEventListener('onclick', function r() {
  //   let p2 = document.getElementById('resume');
  //   p2.style.background = 'red';
  // });

  const navigate = useNavigate();  

  const connect = () => {
    navigate('/connect')
  }


  // const instag =()=>{  
  //   <a href='https://github.com/ravi9879'></a>
  //   av('https://github.com/ravi9879')
  // }

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coder.', 'Frontend Developer.', 'Backend Developer.'],
      typeSpeed: 50,
      startDelay: 1000,
      backSpeed: 80,
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <div className='flex-1'>
        <img src={Pic} alt={Personal} className='personal' />
        {/* <img src={Personal} alt={Personal} className='personal' /> */}
        <div className='flex-2'>
          <h2>Hi , I am <span>Ravi Prasad Gupta. </span></h2>
          <h2>I am a Passionate <span ref={el} /> </h2>
          <button className='hover_button'>
            {/* <a href='https://drive.google.com/file/d/1cIZuBQ7z8KKMouWDVmh5AkdabtDro1Mc/view?usp=sharing'>Download Resume</a> */}
            <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1yH7PeQvYzDcPHjRJAzD33jWiPtIItSHQ/view'>Download Resume</a>
          </button>
          <button className='hover_button' onClick={connect} >Connect To Me</button>
          <footer>
            <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'><img src={linkedin} alt={linkedin} className='all' /></a>
            <a href='https://www.instagram.com/ravigupta7727/?hl=en'><img src={insta} alt={insta} className='all' /></a>
            <a href='https://www.facebook.com/profile.php?id=100014389154807'><img src={fb} alt={fb} className='all' /></a>
            <a href='https://github.com/ravi9879'><img src={github} alt={github} className='all' /></a>
          </footer>  
        </div>


      </div>
    </>
  )
}

export default Portfolio  
 