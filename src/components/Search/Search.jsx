export default function Search({ searchVal, setSearchVal, handleSubmit }) {
    return (
        <>
            <input 
                type='text' 
                value={searchVal} 
                onChange={e => setSearchVal(e.target.value)} 
                placeholder='Enter a song title...'
            />
            <button onClick={handleSubmit}>Search</button>
        </>
    );
}
