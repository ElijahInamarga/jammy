import Track from '../Track/Track.jsx';

export default function Results({ results }) {
    return (
        <>
            <h2>Results</h2> 
            <Track song={results}/>
        </>
    );
}