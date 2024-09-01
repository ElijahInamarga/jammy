import { useState } from 'react';

import Search from '../Search/Search.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import Results from '../Results/Results.jsx';

export default function App() {
    const [searchVal, setSearchVal] = useState('');
    const [results, setResults] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    function handleSubmit() {
        setResults(searchVal);
        setSearchVal('');
    }

    return (
        <>
            <Search 
                searchVal={searchVal}
                setSearchVal={setSearchVal}
                handleSubmit={handleSubmit}
            />
            <Results 
                results={results}
            />
            <Playlist />
        </>
    );
}