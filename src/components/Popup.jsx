import React from 'react'
import Player from './Player'
import data from '../data';
import {useRef, useState, useEffect} from 'react'

const Popup = (props) => {
  const [songs, setSongs] = useState(data);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(data[0]);

  const audioElement = useRef();

  useEffect(() => {
    if(isPlaying){
      audioElement.current.play();
    }
    else{
      if(typeof audioElement.current !== 'undefined'){
        audioElement.current.pause();
      }
      else{
        console.log('audioElement.current is not defined at this point')
      }
    }
  }, [isPlaying, currentSong])

  const onPlaying = () => {
    const duration = audioElement.current.duration;
    const ct = audioElement.current.currentTime;

    setCurrentSong({...currentSong, "progress":ct/duration*100, "length":duration})
  }

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
          <div className='popup-topbar'>
            <p>Audio Player</p>
            <button className='btn btn-block close-btn' onClick = {() => props.setTrigger(false)}>Close</button>
          </div>
          <audio src= {currentSong.song} ref={audioElement} onTimeUpdate={onPlaying}/>
          <Player songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioElement={audioElement} currentSong={currentSong} setCurrentSong={setCurrentSong}/>
        </div>
        
    </div>
  ) : "";
}

export default Popup;