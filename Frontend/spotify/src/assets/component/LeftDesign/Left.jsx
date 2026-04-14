import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import {FaHeart   } from "react-icons/fa";
import { FaPlus    } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'


const Left = () => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  return (
         <div className=" gap-8">
      
             <div  onClick={()=> navigate('/home')}
                  className="flex  items-center gap-3 p-6 space-y-4 hover:text-green-400">
                  <FaHome className="text-2xl text-white "  />
                  <p className="text-white text-2xl">Home</p>
             </div>

        <div className="flex  items-center gap-3 p-6 space-y-4 hover:text-green-400">
            <FaSearch className="text-white text-2xl" />
            <p className="text-white text-2xl">Search</p>
         </div>

             <div className="flex  items-center gap-3 p-6 space-y-4 hover:text-green-400">
            <FaMusic className="text-white text-2xl" />
            <p className="text-white text-2xl">Library</p>
            </div>

             <div className="flex items-center gap-3 p-6 space-y-4 hover:text-green-400">
            <FaHeart  className="text-white text-2xl" />
            <p className="text-white text-2xl">Liked Songs</p>
            </div>

             <div className="flex  items-center gap-3 p-6 space-y-4 hover:text-green-400">
            < FaPlus className="text-white text-2xl" />
            <p className="text-white text-2xl">Create Playlisth</p>
            </div>

            {user?.role === "artist" && (
      <button 
        onClick={() => navigate('/upload')}
        className="mt-5 w-full bg-white text-black font-bold py-2 rounded-full"
      >
        Upload Music
      </button>
    )}
    </div>
  )
}

export default Left
