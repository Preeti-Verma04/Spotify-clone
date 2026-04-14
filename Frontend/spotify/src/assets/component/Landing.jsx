import React from 'react'
import bg from "./Photos/Spotify-Icon-with-Spotify-playlists-background.avif"
import {useNavigate} from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-full bg-mist-900 flex  flex-col gap-6 items-center justify-center">

      <div className="h-11/12 w-11/12 bg-mist-700 flex flex-col  items-center justify-center gap-8 " style={{
        backgroundImage:`url(${bg})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
        
        }}>



          <h1 className="text-black text-4xl font-bold text-center"> Millions of songs. Free on Spotify.</h1>
          <button 
          onClick ={()=>navigate('/Sign-up')}
          className=" bg-emerald-500 text-black font-bold rounded-full h-16 w-80 text-xl hover:scale-105 transition-transform border-2 border-transparent ">Sign Up</button>

          <button 
            onClick={() => navigate('/login')}
            className="bg-emerald-500 text-black font-bold rounded-full h-16 w-80 text-xl hover:scale-105 transition-transform border-2 border-transparent"
          >
            Log In
          </button>
      </div>
    </div>
  )
}

export default Landing
