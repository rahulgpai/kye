import React, { Fragment } from "react";

const SearchList = ({ handleChange }) => {
  return (
    <Fragment>
      <input
        type="search"
        placeholder="Search Users..."
        onChange={handleChange}
      ></input>
    </Fragment>
  );
};

export default SearchList;
