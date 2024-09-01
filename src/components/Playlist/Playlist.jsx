import { useState } from 'react';

export default function PlayList() {
    const [list, setList] = useState([]);

    return (
        <>
            <h2>Playlist</h2>
            <ul>
                {list.map(element => <li>{element}</li>)}
            </ul>
        </>
    );
}