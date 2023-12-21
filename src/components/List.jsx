import data from '../data';
import Song from './Song';
import List_title from './List_title'
import {useState} from 'react';

const List = ({updateTrigger}) => {
    const [songList, setSongList] = useState(data);
    const num_song = songList.length;

    const handleClick = () => {
        updateTrigger(true)
    }

    return(
        <main>
            <section className='container'>
                <List_title/>

                <p>
                    {songList.map((songdetail) => {
                        return (
                            <Song key={songdetail.id} name={songdetail.name} song={songdetail.song}/>
                        );
                    })}
                </p>
                <button className="btn btn-block" onClick={handleClick}>Play</button>
            </section>
        </main>
    );
};

export default List;