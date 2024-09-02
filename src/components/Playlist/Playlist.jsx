import Tracklist from "../Tracklist/Tracklist";

export default function Playlist(props) {
    return (
        <>
            <br />
            <input 
                type="text"
                onChange={props.onChangePlaylistName}
                placeholder="Playlist name"
                value={props.playlistName}
            />
            <button onClick={props.savePlaylist}>Save To Spotify</button>
            <Tracklist 
                searchResults={props.playlistTracks}
                inPlaylist={true}
                removeFromPlaylist={props.removeFromPlaylist}
            />
            <br />
        </>
    );
}