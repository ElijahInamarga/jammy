export default function Track(props) {
    function handleClick() {
        
    }

    return (
        <>
            {props.song != '' ? 
            <>
                <h2>Song: {props.song}</h2> 
                <button onClick={handleClick}>+</button>
            </> : ''}
        </>
    );
}