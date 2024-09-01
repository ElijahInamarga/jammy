import Tracklist from '../Tracklist/Tracklist.jsx';

export default function SearchResults(props) {
    return (
        <Tracklist 
            searchResults={props.searchResults}
            inPlaylist={false}
            addToPlaylist={props.addToPlaylist}
        />
    );
}