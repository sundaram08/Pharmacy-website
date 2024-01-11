import React,{useEffect, useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import { searchMedicines } from '../../features/medicineSlice';
import { useDispatch } from 'react-redux';
const Search = () => {
    const dispatch  = useDispatch();
    
    const handleSearch = (e) => {
      e.preventDefault();
    
      dispatch(searchMedicines(e.target.value))
    };
    return (
      <section className="p-1 m-0">
        <div className="max-w-2xl mx-auto flex">
          <input
            type="text"
            placeholder="Search by name, category, price or formula"
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-grow"
            style={{ width: '1400px' }} 
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            <FaSearch />
          </button>
        </div>
      </section>
    );
  };
  
  export default Search;
