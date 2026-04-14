import React from 'react'
import{FaVolumeUp} from 'react-icons/fa'

const RightVolume = () => {
  return (
    <div>
      <FaVolumeUp className=" cursor-pointer text-2xl"/>
      <input type="range" />

    </div>
  )
}

export default RightVolume
