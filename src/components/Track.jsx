export default function Track(props) {
    return (
        <>
            {props.song != '' ? 
            <>
                <h2>Song: {props.song}</h2> 
                <button>+</button>
            </> : ''}
        </>
    );
}