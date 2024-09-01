export default function PlayList({ playlist, deleteSong }) {
    return (
        <>
            <h2>Playlist</h2>
            
            {playlist.map((element, i) => 
            <>
                <h3>{element}</h3>
                <button onClick={()=> deleteSong(i)}>-</button>
            </>)}
        </>
    );
}