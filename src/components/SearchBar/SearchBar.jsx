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
                placeholder="What do you want to play?"
                value={input}
                onChange={handleChange}
                className={styles.search}
            />

            <button className={styles.searchButton}onClick={searchInput}>►</button>
        </>
    );
}