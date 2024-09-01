export default function PlayList({ playlist }) {
    return (
        <>
            <h2>Playlist</h2>
            <ul>
                {playlist.map(element => <li>{element}</li>)}
            </ul>
        </>
    );
}