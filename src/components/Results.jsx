import Track from './Track.jsx';

export default function Results(props) {
    return (
        <>
            <h2>Results</h2> 
            <Track song={props.song}/>
        </>
    );
}