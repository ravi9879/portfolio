import React from 'react'
import Crud from './images/Crud.jpg'
import suduko from './images/suduko.png'

function Project() {
  return (
    <> 
      <div className='project'>
        <ol>
          <li>Delhi-Cart</li> 
          <img src="https://149449856.v2.pressablecdn.com/wp-content/uploads/2017/11/Ecommerce-BTL.jpg" alt ='' className='pro' />
          <button className='hover_button' style={{ "width": "100%" }}>
            <a href='https://ecommerce-cyan-nine.vercel.app/'>Visit The Page</a>
          </button>
          <li>Crud App</li>
          <img src={Crud} alt={Crud} className='pro' />
          <button style={{ "width": "100%" }} className='hover_button'>
            <a href='https://crud-one-hazel.vercel.app/'>Visit The Page</a>  
          </button>
          <li>Suduko Solver</li>
          <img src={suduko} alt={suduko} className='pro' />
          <button className='hover_button' style={{ "width": "100%" }}>
            <a href='https://suduko-three.vercel.app/'>Visit The Page</a>
          </button>
        </ol>
      </div>
    </>
  )
}

export default Project