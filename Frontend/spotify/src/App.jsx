import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './assets/component/Landing'
import SignUp from './assets/component/SignUp'
import Login from './assets/component/Login'
import Home from './assets/component/Home'
import UploadMusic  from './assets/component/Upload/UploadMusic'

const App = () => {

  const [currentSong,setCurrentSong]=useState(null)
  return (
    <div>
      
      <Router>
        <Routes>
           
           <Route path="/" element={<Landing/>}/>
          <Route path="/Sign-up"  element={<SignUp/>}/>
          <Route path="/login"  element={<Login/>}/>
           <Route path="/home"  element={<Home setCurrentSong={setCurrentSong} 
              currentSong={currentSong} 
              />}/>
              <Route path="/upload" element={< UploadMusic/>}/>
          
          
        
        </Routes>

      </Router>
    </div>
  )
}

export default App
