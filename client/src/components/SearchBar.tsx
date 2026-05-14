import { useState,type ChangeEvent} from 'react';
    
     interface SearchBarProps {
       onSearch: (query: string) => void;
     }
    
     export const SearchBar = ({ onSearch }: SearchBarProps) => {
       const [query, setQuery] = useState('');
    
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        onSearch(value);
      };
   
      return (
        <div className="relative group w-full max-w-md">
          {/* Icono de búsqueda absoluto */}
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant
      group-focus-within:text-primary transition-colors">
            search
          </span>
   
          {/* Input estilizado */}
          <input
            type="text"
            className="w-full bg-surface-container-high border border-outline-variant rounded-full py-3 pl-12 pr-6
      text-on-background placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:ring-2
      focus:ring-primary/20 transition-all font-body-md"
            placeholder="Buscar posts por título..."
            value={query}
            onChange={handleChange}
          />
        </div>
      );
    };
