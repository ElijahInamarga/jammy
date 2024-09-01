import Track from '../Track/Track.jsx';

export default function Tracklist(props) {
    return (
        <>
            {props.searchResults.map(track =>   
            <Track 
                track={track} 
                key={track.id}
                addToPlaylist={props.addToPlaylist}
                inPlaylist={props.inPlaylist}
                removeFromPlaylist={props.removeFromPlaylist}
            />
            )}
        </>
    );
} 