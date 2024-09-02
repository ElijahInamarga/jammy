import { useState } from 'react';
import styles from './SearchBar.module.css';

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
                className={styles.search}
            />
            <button onClick={searchInput}>Search</button>
        </>
    );
}