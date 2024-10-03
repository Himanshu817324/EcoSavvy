
import "./Search.css"
import { useState } from 'react';

const wasteTypes = [
  { id: 1, name: '' },
  { id: 2, name: '' },
  { id: 3, name: '' },
  { id: 4, name: '' },
  { id: 5, name: '' },
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredWasteTypes = wasteTypes.filter((wasteType) => {
      return wasteType.name.toLowerCase().includes(searchTerm);
    });
    setSearchTerm(searchTerm);
    setSearchResults(filteredWasteTypes);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for waste types"
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;