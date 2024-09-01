import { useState } from "react";

export default function PlayList({ playlist, deleteSong }) {
    const [playlistTitle, setPlaylistTitle] = useState('');

    function handleChange(e) {
        setPlaylistTitle(e.target.value);
    }

    return (
        <>
            <br />
            <input 
                type="text"
                value={playlistTitle}
                onChange={handleChange}
            />
            {playlist.map((element, i) => 
            <>
                <h3>{element}</h3>
                <button onClick={()=> deleteSong(i)}>-</button>
            </>)}
        </>
    );
}