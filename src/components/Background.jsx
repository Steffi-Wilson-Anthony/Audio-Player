import React from 'react'
import christmas from '../assets/FirstNoel.mp4';

const Background = () => {
  return (
    <div>
        <video src={christmas} autoPlay loop muted id='video'/>
    </div>
  );
}

export default Background;