import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Connect() {

  // const [name, setname] = useState('');
  // const [email, setemail] = useState('');
  // const [no, setno] = useState('');

  const av = useNavigate();

  const se = async (event) => {
    event.preventDefault();
    try { 
      // console.log(event.target)
      let name = document.querySelector('#name');
      let email = document.querySelector('#email');
      let num = document.querySelector('#num');
      await axios.post('https://portfolio-backend-three-xi.vercel.app/send/', { name: name.value, email: email.value, no: num.value })
      alert("You Will Be Contacted Shortly") ;
      av('/');
    }
    catch (err) { 
      alert("Internal Error") ;
      av('/');
    }
  }

  return (
    <>
      <form onSubmit={se} className='flex-2'> 
        <h1>Enter Your Details </h1>
        <p>Name : <input type="text" name='name' placeholder="enter your name " id='name' /></p>
        <p>Email ID : <input type="text" name='email' placeholder="enter your email"  id='email' /></p>
        <p>Mobile No : <input type="text" name='no' placeholder="enter your mobile no " id='num' /></p>
        <button className='hover_button' >Submit</button>
      </form>
    </>
  )
}

export default Connect