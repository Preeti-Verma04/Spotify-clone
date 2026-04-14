import React from 'react'

const SongInfo = ({song}) => {



 
  return (
    <div>
      <div>
        <h3 className="text-sm font-semibold">{song?.title}</h3>
        <h4 className="text-xs text-gray-400">{song?.artist}</h4>
      </div>
    </div>
  )
}

export default SongInfo
