import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {

  let location = useLocation();
  // console.log(location);

  return (
    <nav className='container1'>
      <h3>Ravi's Portfolio</h3>
      <Link className={`${location.pathname === "/" ? "" : "li"}`} to="/">Home</Link>
      <Link className={`${location.pathname === "/about" ? "" : "li"}`} to="/about" >About</Link>
      {/* <Link className={`${location.pathname === "/education" ? "" : "li"}`} to="/education">Education</Link> */}
      <Link className={`${location.pathname === "/project" ? "" : "li"}`} to="/project">Projects</Link>
      <Link className={`${location.pathname === "/achievement" ? "" : "li"}`} to="/achievement">Skills</Link>
      <Link className={`${location.pathname === "/feedback" ? "" : "li"}`} to="/feedback">Feedback</Link>
    </nav>

  )
}

export default Nav

