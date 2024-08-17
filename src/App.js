import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Museums from './pages/Museums'
import Temples from './pages/Temples'
import Lakes from './pages/Lakes'
import Historical from './pages/Historical'
import NoPage from './pages/NoPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<Landing />}/>
          <Route path ='/home' element={<Landing/>}/>
          <Route path ='/museums' element={<Museums/>}/>
          <Route path ='/temples' element={<Temples/>}/>
          <Route path ='/lakes' element={<Lakes/>}/>
          <Route path ='/historical-sites' element={<Historical/>}/>
          <Route path = "*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
