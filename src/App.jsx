import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Form from './components/Form'
import Tables from './components/Tables'

function App() {

  return (
    <div className="container">
      <h1 className='fs-1 text-center pt-4 text-dark'>Real Time Serach App </h1>
      <hr />

   <Form/>
   <Tables/>
 
    </div>
  )
}

export default App
