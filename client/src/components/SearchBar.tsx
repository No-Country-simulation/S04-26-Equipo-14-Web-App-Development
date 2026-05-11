     import { useState } from 'react';
     import styles from './SearchBar.module.css';
    
     interface SearchBarProps {
      
       onSearch: (query: string) => void;
     }
   
    export const SearchBar = ({ onSearch }: SearchBarProps) => {
      const [query, setQuery] = useState('');
   
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);    
        onSearch(value);    
      };
   
      return (
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar posts por título..."
            value={query}
            onChange={handleChange}
          />
        </div>
      );
    };
