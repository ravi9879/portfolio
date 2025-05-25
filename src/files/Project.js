import React from 'react'
import Crud from './images/Crud.jpg'
import suduko from './images/suduko.png'

function Project() {
  return (
    <> 
      <div className='project'>
        <ol>
          <li>Suduko Solver</li>
          <img src={suduko} alt={suduko} className='pro' />
          <button className='hover_button' style={{ "width": "100%" }}>
            <a href='https://suduko-three.vercel.app/'>Visit The Page</a>
          </button>
          <li>Crud App</li>
          <img src={Crud} alt={Crud} className='pro' />
          <button style={{ "width": "100%" }} className='hover_button'>
            <a href='https://crud-one-hazel.vercel.app/co'>Visit The Page</a>
          </button>
        </ol>
      </div>
    </>
  )
}

export default Project