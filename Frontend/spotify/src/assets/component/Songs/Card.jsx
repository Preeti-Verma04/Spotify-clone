import React from 'react'
import bg from './download.jpeg'
import {FaPlay} from 'react-icons/fa'

const Card = ({song, setCurrentSong}) => {
  return (
    <div 
    onClick={()=>setCurrentSong(song)}
   className="bg-neutral-900 p-4 rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer w-full max-w-[300px]"
    >
        <div className="w-full aspect-square overflow-hidden rounded-md bg-neutral-800">
              <img src={song?.image||bg}
              alt={song?.title}
              className="w-full h-full object-cover"
              />

               <FaPlay className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"/>

        </div>
         <div className="mt-3 text-white">
        <h3 className="text-sm font-semibold">{song?.title}</h3>
        <p className="text-xs text-gray-400">{song.artist?.username||"unknown artist"}</p>
      </div>
      
    </div>
  )
}

export default Card
