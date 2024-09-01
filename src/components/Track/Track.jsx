export default function Track(props) {
    return (
        <>
            {props.songName != '' ? 
            <>
                <h3>Song: {props.songName}</h3> 
                <button onClick={props.addToPlaylist}>+</button>
            </> : ''}
        </>
    );
}