// import { BrowserRouter as Router, Routes, Route, Link , useLocation } from 'react-router-dom' ;  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;  
import Home from './components/Home.js' 
import About from './components/About.js'
import Project from './components/Project.js'
import Achievement from './components/Achievement.js'
import Education from './components/Education.js'
import Nav from './components/Nav.js'
import './components/Style.css'   
import Connect from './components/Connect.js'
import Feedback from './components/Feedback.js'
import * as React from 'react'



function App() {
  
  // React.useEffect(()=> {
  //   console.log(location.pathname) ;
  // } , [location]);

  return (
    <>
      <Router> 
        <Nav /> 
        <Routes>
          <Route path="/about" element={<About />}/>  
          <Route path="/education" element={<Education />}/>  
          <Route path="/project" element={<Project />}/>  
          <Route path="/achievement" element={<Achievement/>}/>  
          <Route path="/connect" element={<Connect />}/>  
          <Route path="/feedback" element={<Feedback />}/>  
          <Route path="/" element={<Home />}/> 
        </Routes>   
      </Router>   
    </>
  );
}

export default App ;
  