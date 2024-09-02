import Tracklist from "../Tracklist/Tracklist";
import styles from './Playlist.module.css';

export default function Playlist(props) {
    function makeSaveButtonAppear() {
        if(props.playlistTracks.length > 0) {
            return <button onClick={props.savePlaylist}>Save To Spotify</button>
        }
    }

    return (
        <>
            <input 
                type="text"
                onChange={props.onChangePlaylistName}
                placeholder="Playlist name"
                value={props.playlistName}
                className={styles.input}
            />
            <Tracklist 
                searchResults={props.playlistTracks}
                inPlaylist={true}
                removeFromPlaylist={props.removeFromPlaylist}
            />
            <div className={styles.buttonWrapper}>
                {makeSaveButtonAppear()}
            </div>
        </>
    );
}