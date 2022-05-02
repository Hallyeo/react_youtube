import React, {memo, useRef} from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo( ({onSearch} ) => {
    const inputRef = useRef();
    const handleSearch = () => {
      const value = inputRef.current.value;
      onSearch(value);
    }
    const onClick = () => {
      handleSearch();
    }
    const onKeyPress = (event) => {
      event.key === 'Enter' && handleSearch();
    }
    return (
      <header className={styles.header}>
        <img className={styles.logo} src="/images/youtube_logo.png" alt="youtube_logo" />
        {/* <h1 className={styles.title}>Youtube</h1> */}
        <input ref={inputRef} className={styles.input} type="text" placeholder="Search..." onKeyPress={onKeyPress} />
        <button className={styles.button} type="submit" onClick={onClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </header>
    )
  }
);

export default SearchHeader;