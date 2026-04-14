import React from 'react'

import Left from './LeftDesign/Left'
import MusicPlayer from './MusicPlayer'
import Songs from './Songs/Songs'

const Home = ({ setCurrentSong, currentSong }) => {
  return (
    <div className="h-screen">
        <div className="flex  justify-center h-5/6">
            <section className="bg-black  w-1/5">
            <Left/>

            </section>
            <section className="bg-gradient-to-b from-neutral-800 to-black w-4/5">
             <Songs setCurrentSong={setCurrentSong} />
            </section>
           
         </div>
      <p></p>
      <div className=" h-1/6 w-full  bg-black">
        <MusicPlayer song={currentSong}/>
      </div>
    </div>
  )
}

export default Home
