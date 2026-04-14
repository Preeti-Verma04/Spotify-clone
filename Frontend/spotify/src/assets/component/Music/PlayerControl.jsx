import React, { useRef, useEffect, useState } from "react";
import {FaPlay, FaPause} from 'react-icons/fa'

const PlayerControl = ({ song }) => {
  const audioRef = useRef();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay]= useState(false)

  // song change → play
  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.src = song.uri;
      audioRef.current.play();
      setPlay(true)
    }
  }, [song]);

  // update time
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // get duration
  const handleLoaded = () => {
    setDuration(audioRef.current.duration);
  };

  const toggelPlay =()=>{
      if(play){
        audioRef.current.pause();
      }else{
        audioRef.current.play();
      }
      setPlay(!play)
  }

  return (
    <div className="flex flex-col items-center gap-1 w-full">


      <div className="flex items-center gap-6 mb-1" >
        <button onClick={toggelPlay} className="bg-white text-black p-2 rounded-full hover:scale-105 transition">
        {play ? <FaPause /> : <FaPlay />}

        </button>

      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
        onEnded={()=>setPlay(false)}
      />

      <div className="flex items-center gap-2 w-full max-w-md">
        <span className="text-[10px] text-gray-400">
          {Math.floor(currentTime / 60)}:
          {("0" + Math.floor(currentTime % 60)).slice(-2)}
        </span>

        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
          }}
          className="w-full h-1 accent-green-500 cursor-pointer"
        />

        <span className="text-[10px] text-gray-400">
          {Math.floor(duration / 60)}:
          {("0" + Math.floor(duration % 60)).slice(-2)}
        </span>
      </div>

    </div>
  );
};

export default PlayerControl;