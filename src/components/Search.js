import React, {useState} from "react";

const Search = ({search}) => {
const [searchValue, setSearchValue] = useState("");

const handleSeatchInputChanges = e => {
    setSearchValue(e.target.value);
};

const resetInputField = () => {
    setSearchValue("");
};

const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
};

return (
 <form className="search">
     <input 
        value={searchValue}
        onChange={handleSeatchInputChanges}
        type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
 </form>
);


};






export default Search;