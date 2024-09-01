import Track from '../Track/Track.jsx';

export default function Results({ songName, setPlaylist, playlist }) {
    function addToPlaylist() {
        if(!playlist.includes(songName)) {
            setPlaylist(prev => [songName, ...prev]);
        }
    }

    return (
        <>
            <h2>Results</h2> 
            <Track 
                songName={songName}
                addToPlaylist={addToPlaylist}
            />
        </>
    );
}