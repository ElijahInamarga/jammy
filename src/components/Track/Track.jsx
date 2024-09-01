export default function Track(props) {
    function renderAddOrDel() {
        if(props.inPlaylist) {
            return <button onClick={() => props.removeFromPlaylist(props.track)}>-</button>
        } else {
            return <button onClick={() => props.addToPlaylist(props.track)}>+</button>
        }
    }

    function passTrack() {
        props.addToPlaylist(props.track);
    }

    return ( 
        <>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
            {renderAddOrDel()}
        </>
    );
}