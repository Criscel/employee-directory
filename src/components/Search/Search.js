import React from "react";

const search = (props) => {
  return (
    <div>
      <div className="search-div">
        <span className="span-label"> Search by </span>
        &nbsp;
        <div className="searchbar-div">
          <input
            className="searchbar"
            placeholder="Employee name"
            onChange={props.handleNameSearch}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default search;
