import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
    
      console.log(`Searching for: ${searchTerm}`);
    };
  
    return (
      <section className="p-1 m-0">
        <div className="max-w-2xl mx-auto flex">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-grow"
            style={{ width: '1400px' }} 
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            <FaSearch />
          </button>
        </div>
      </section>
    );
  };
  
  export default Search;
