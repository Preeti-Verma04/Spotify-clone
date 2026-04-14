import React from 'react'
import SongInfo from './Music/SongInfo'

import PlayerControl from './Music/PlayerControl'
import RightVolume from './Music/RightVolume'

const MusicPlayer = ({song}) => {
  return (
    <div className="grid grid-cols-3 items-center px-6 h-full text-white bg-black">
       <section className="flex justify-start">
        <SongInfo song={song}/>
      </section>

     
      <section className="flex flex-col items-center justify-center">
        <PlayerControl song={song}/>
      </section>

      <section className="flex justify-end">
        <RightVolume/>
      </section>
    </div>
  )
}

export default MusicPlayer
