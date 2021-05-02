import React from 'react';
import { FcFilledFilter,FcClearFilters,FcGenericSortingAsc,FcGenericSortingDesc  } from "react-icons/fc";
import "./Filter.css";

function Filter() {
    return (
      <div className="filter-sort-div">
        <div className="filter-div">
          <label htmlFor="state-filter" className="label">Filter by </label>
          <select id="state-filter" className="filter-select" defaultValue="none" defaultChecked="none">
            <option value="none" disabled selected>State</option>
            <option value="nsw">New South Wales</option>
            <option value="act">Australian Capital Territory</option>
            <option value="vic">Victoria</option>
            <option value="qld">Queensland</option>
            <option value="sa">South Australia</option>
            <option value="wa">Western Australia</option>
            <option value="nt">Northern Territory</option>
            <option value="tas">Tasmania</option>    
          </select>

          <button id="apply-filter-btn" className="sort-btn"><FcFilledFilter></FcFilledFilter></button>

          <button id="clear-filter-btn" className="sort-btn"><FcClearFilters></FcClearFilters></button>
        </div>
  
        <div className="sort-div">
          <label htmlFor="sort" className="label">Sort by </label>
          <select id="sort" className="sort-select" defaultValue="none" defaultChecked="none">
            <option value="none" disabled>Category</option>
            <option value="lastName">Last Name</option>
            <option value="firstName">First Name</option>
          </select>
          &nbsp;
          <button id="asc-btn" className="sort-btn"><FcGenericSortingAsc></FcGenericSortingAsc></button>
          &nbsp;
          <button id="desc-btn" className="sort-btn"><FcGenericSortingDesc></FcGenericSortingDesc></button>
        </div>
      </div>
    )
  }
  
  export default Filter;