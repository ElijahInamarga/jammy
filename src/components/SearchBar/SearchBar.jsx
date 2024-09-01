import { useState } from 'react';

export default function SearchBar(props) {
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    function searchInput() {
        props.search(input);
        setInput('');
    }

    return (
        <>
            <input 
                type="text"
                placeholder="Enter a song..."
                value={input}
                onChange={handleChange}
            />
            <button onClick={searchInput}>Search</button>
        </>
    );
}