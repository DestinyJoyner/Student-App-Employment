import { useState } from "react";
import "./SearchFilter.scss";

function SearchFilter({ setFunction, students }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchBar(e) {
    const value = e.target.value;
    setSearchInput(value);
    
    if (!value) {
      setFunction(students);
    } else {
        // filters out symbols for val
    const onlyLettersVal= value.split("").filter(el => (/[a-z]/gi).test(el)).join("")
      filterStudents(onlyLettersVal, students, setFunction);
    }
  }

  // Handle Filter function
  function filterStudents(val, arr, setFunction) {
    const filteredStudents = arr.filter((el) => {
      const first = el.firstName;
      const last = el.lastName;
      const regex = new RegExp(val, "gi");


      if (regex.test(first) || regex.test(last)) {
        return el;
      }
    });
    setFunction(filteredStudents);
  }

  return (
    <label className="search-filter">
      <input
        type="text"
        placeholder="Search by name"
        className="search-filter-searchbar"
        onChange={(event) => handleSearchBar(event)}
      />
    </label>
  );
}

export default SearchFilter;
