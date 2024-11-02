
import { useState } from 'react';

// SearchBar Component
const SearchBar = ({ SetSearchQuery }) => {
  const [input, setInput] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    SetSearchQuery(input); // Pass the input to the parent component (App)
  };

  return (
    <div className="search_container">
      <h1>What's on your mind?</h1>
      <div className="searchBar">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search for food, restaurants, or cuisines"
        />
        <button onClick={handleSearchClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

// const SearchBar=({SetsearchQuery})=>
// {
//     return(
//         <div className="seacrh_container">
//               <h1>what's on your mind ?</h1>
//   <div className="searchBar">
//              <input type="text" placeholder="Search for food, restaurants, or cuisines" />
//             <button> <i class="fa-solid fa-magnifying-glass"></i> </button> 
//              {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
             
//         </div>
//         </div>
      
       
//     );
// }
// export default SearchBar;