import React from 'react'
import Card from './Card'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Songs = ({setCurrentSong}) => {

const [songs,setSongs]=useState([])

useEffect(()=>{
  axios.get("http://localhost:3000/api/music/",{ withCredentials: true })
  .then((res)=>{
    setSongs(res.data.music||[])
  })
  .catch((err)=>{
    console.log(err)
  })
},[])



  return (
    <div className="flex  flex-wrap h-[80vh]  items-center gap-10  pt-6  pl-30 pr-20 overflow-y-auto ">

      {songs.map((song)=>(
        <Card key={song._id} song={song} setCurrentSong={setCurrentSong}/>
      ))}
      
      



    </div>
  )
}

export default Songs
