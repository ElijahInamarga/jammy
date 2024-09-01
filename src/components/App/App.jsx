import React, { useState } from 'react';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);  
    const [playlistName, setPlaylistName] = useState();

    // SearchResult function
    function addToPlaylist(track) {
        // If track does not exist then add to playlist
        if(!playlistTracks.find(arg => arg.id === track.id)) {
            setPlaylistTracks(prev => [...prev, track]);
        }
    }

    // Search functions
    function search(arg) {

    }

    // Playlist functions
    function removeFromPlaylist(track) {
        setPlaylistTracks(playlistTracks.filter(arg => arg.id !== track.id))
    }

    function onChangePlaylistName(e) {
        setPlaylistName(e.target.value);
    }

    function savePlaylist() {
        const playlistTrackURIs = playlistTracks.map(arg => arg.uri);
    }


    return (
        <>  
            <SearchBar search={search}/>
            <SearchResults 
                searchResults={searchResults}
                addToPlaylist={addToPlaylist}
            />
            <Playlist 
                playlistName={playlistName}
                playlistTracks={playlistTracks}
                removeFromPlaylist={removeFromPlaylist}
                onChangePlaylistName={onChangePlaylistName}
                savePlaylist={savePlaylist}
            />
        </>
    );
}