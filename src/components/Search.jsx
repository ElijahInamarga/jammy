import Playlist from './Playlist.jsx';
import Results from './Results.jsx';
import { useState } from 'react';

export default function Search() {
    const [input, setInput] = useState('');
    const [song, setSong] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleClick() {
        setSong(input);
        setInput('');
    }

    return (
        <>
            <input type='text' value={input} onChange={handleChange} placeholder='Search for a song...'></input>
            <button onClick={handleClick}>Search</button>
            <Results song={song} />
        </>
    );
}
