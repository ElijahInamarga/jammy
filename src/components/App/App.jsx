import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Spotify } from '../../util/Spotify.js';
import styles from './App.module.css';

export default function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);  
    const [playlistName, setPlaylistName] = useState('');

    // SearchResult function
    function addToPlaylist(track) {
        // If track does not exist
        if(!playlistTracks.find(arg => arg.id === track.id)) {
            setPlaylistTracks(prev => [...prev, track]);
        }
    }

    // Search functions
    function search(arg) {
        // Ignores empty searches
        if(arg) {
            Spotify.search(arg).then(result => setSearchResults(result));
        }
    }

    // Playlist functions
    function removeFromPlaylist(track) {
        setPlaylistTracks(playlistTracks.filter(arg => arg.id !== track.id))
    }

    function onChangePlaylistName(e) {
        setPlaylistName(e.target.value);
    }

    function savePlaylist() {
        // Passes playlist name and array of URIs
        Spotify.savePlaylist(playlistName, playlistTracks.map(arg => arg.uri));
        setPlaylistName('');
        setPlaylistTracks([]);
    }


    return (
        <div className={styles.wrapper}>  
            <SearchBar className={styles.search} search={search}/>
            <div className={styles.wrapper2}>
                <div className={styles.results}>
                    <SearchResults 
                        searchResults={searchResults}
                        addToPlaylist={addToPlaylist}
                    />
                </div>
                <div className={styles.playlist}>
                    <Playlist 
                        playlistName={playlistName}
                        playlistTracks={playlistTracks}
                        removeFromPlaylist={removeFromPlaylist}
                        onChangePlaylistName={onChangePlaylistName}
                        savePlaylist={savePlaylist}
                    />
                </div>
            </div>
        </div>
    );
}