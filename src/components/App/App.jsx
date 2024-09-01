import { useState } from 'react';

import Search from '../Search/Search.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import Results from '../Results/Results.jsx';

export default function App() {
    const [searchVal, setSearchVal] = useState('');
    const [songName, setSongName] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    function handleSubmit() {
        setSongName(searchVal);
        setSearchVal('');
    }

    function deleteSong(indexToDelete) {
        setPlaylist(playlist.filter((_, i) => i !== indexToDelete));
    }

    return (
        <>
            <Search 
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                handleSubmit={handleSubmit}
            />
            <Results 
                songName={songName}
                playlist={playlist}
                setPlaylist={setPlaylist}
            />
            <Playlist 
                playlist={playlist}
                deleteSong={deleteSong}
            />
        </>
    );
}