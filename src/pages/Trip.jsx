import React from 'react'
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Form from '../components/Form';


function Trip() {
  return (
    <div>
      <AppBar/>
      <h1 className='mt-5 font-bold	'>Please input some informaton and we will curate a trip-plan for you!  </h1>

      <Form/>
      <Footer/>
    </div>
  )
}

export default Trip
