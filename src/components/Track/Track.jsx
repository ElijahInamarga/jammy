export default function Track(props) {
    return (
        <>
            {props.songName != '' ? 
            <>
                <h2>Song: {props.songName}</h2> 
                <button onClick={props.addToPlaylist}>+</button>
            </> : ''}
        </>
    );
}