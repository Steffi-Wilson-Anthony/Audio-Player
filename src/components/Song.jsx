import React from 'react'
const Song = ({name}) => {
  return (
    <div className='song'>
        <div>
            <h4>{name}</h4>
        </div>
    </div>
  );
}

export default Song;