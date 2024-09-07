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
                <img src={props.image} alt={"Image of " + props.track.album}/>
                <div className={styles.text}>
                    <h3>{props.track.name}</h3>
                    <p>{props.track.artist} | {props.track.album}</p>
                </div>
            </div>
            {renderAddOrDel()}
        </div>
    );
}