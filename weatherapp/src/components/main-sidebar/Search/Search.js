import React, { useState } from "react";
import classes from "./Search.module.css";
const Search = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className={classes["container"]}>
      <input
        type="text"
        className={classes["search-field"]}
        onChange={searchHandler}
        placeholder="Search for places..."
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};

export default Search;
