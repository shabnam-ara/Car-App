import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import './CarSearch.css';

function CarSearch({ setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
return (
    <div className="CarSearch">
      <div className="SearchInputContainer">
        <TextField
          label="Search..."
          
          size="small"
          onChange={handleSearch}
          
          className="SearchTextField"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      
  <select name="relevance" id="relevanceSelect">
    <option value="Relevance">Relevance</option>
  </select>
  
  <select name="Brands" id="allBrandsSelect">
    <option value="All Brands">All Brands</option>
  </select>
  </div>
  );
}

export default CarSearch;
