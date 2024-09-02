import styles from './Track.module.css';

export default function Track(props) {
    function renderAddOrDel() {
        if(props.inPlaylist) {
            return <button className={styles.buttonDel} onClick={() => props.removeFromPlaylist(props.track)}>-</button>
        } else {
            return <button className={styles.buttonAdd} onClick={() => props.addToPlaylist(props.track)}>+</button>
        }
    }

    return ( 
        <div className={styles.wrapper}>  
            <div className={styles.tracks}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAddOrDel()}
        </div>
    );
}