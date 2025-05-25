import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// const axios = require('axios')

function Feedback() {

  // const [name, setname] = useState('');
  // const [email, setemail] = useState('');
  // const [feedback, setfeedback] = useState('');

  const navigate = useNavigate();

  const se = async (event) => {
    event.preventDefault();
    try {
      let name = document.querySelector('#name');
      let email = document.querySelector('#email');
      let feedback = document.querySelector('#feed');
      // await axios.post('http://localhost:800/feedback/', { name: name.value, email: email.value, feedback: feedback.value })
      await axios.post('https://portfolio-backend-three-xi.vercel.app/feedback/', { name: name, email: email, feedback: feedback })
      alert("Your Feedback Has Been Recorded");
      navigate('/');
    }
    catch (err) {
      alert("Internal Error Ocuured")
    }
  }

  const [stud, setstud] = useState([]);


  useEffect(() => {
    // axios.get('http://localhost:800/getfeedback/').then((res) => {
      axios.get('https://portfolio-backend-three-xi.vercel.app/getfeedback/').then((res) => {
      // console.log(res.data) ;
      setstud(res.data);
    })
      .catch(err => console.log(err));
  }, [])

  return (
    <>

      <div className='data-box' >
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL ID</th>
              <th>FEEDBACK</th>
            </tr>
          </thead>
          <tbody>
            {
              stud.map((data, key) => (

                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.feedback}</td>
                </tr>

              ))
            }

          </tbody>

        </table>
      </div>
      <form onSubmit={se} className='flex-2' id='feed-box'>
        <h3>Give Your Feedback </h3>
        <p>Name : <input name='name' placeholder="enter your name " id='name' ></input></p>
        <p>Email ID : <input type="text" name='email' placeholder="enter your email " id='email' /></p>
        <p>Feedback : <br></br><textarea name='feedback' placeholder="enter your Feedback " id='feed' cols="30" rows="5"></textarea></p>
        <button className='hover_button'>Submit</button>
      </form>
    </>

  )
}

export default Feedback
