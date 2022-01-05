import React, { Fragment } from "react";

const SearchBar = (props) => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon1"
          onChange={(e) => props.handleChange(e)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
