import React from 'react'
import { useRef } from 'react';
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';

const Player = ({audioElement, isPlaying, setIsPlaying, currentSong, setCurrentSong, songs, setSongs}) => {

    const clickRef = useRef();

    const PlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElement.current.currentTime = divprogress / 100 * currentSong.length;
    }

    const skipBack = () => {
        const index = songs.findIndex(x=>x.name == currentSong.name);
        if(index == 0){
            setCurrentSong(songs[songs.length-1]);
        }
        else{
            setCurrentSong(songs[index-1]);
        }
        audioElement.current.currentTime = 0;
    }

    const skipToNext = () => {
        const index = songs.findIndex(x=>x.name == currentSong.name);
        if(index == songs[songs.length-1]){
            setCurrentSong(songs[0]);
        }
        else{
            setCurrentSong(songs[index+1]);
        }
        audioElement.current.currentTime = 0;
    }

  return (
    <div className='player-container'>
        <div className='song-title'>
            <p>{currentSong.name}</p>
        </div>
        <div className="navigation">
            <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
                <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
            </div>
        </div>
        <div className="controls">
            <BsFillSkipStartCircleFill className='btn_action' onClick={skipBack}/>
            { isPlaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> :
                <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
            <BsFillSkipEndCircleFill className='btn_action' onClick={skipToNext}/>
        </div>
    </div>
  )
}

export default Player;