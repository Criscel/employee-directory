import React from "react";
import Search from "../Search/Search";
import Select from "../Select/Select";
import { FcFilledFilter, FcClearFilters, FcGenericSortingAsc, FcGenericSortingDesc } from "react-icons/fc";
import { MdClear } from "react-icons/md";
import "./Filter.css";

const stateFilterOptions = [
  {
    value: "none",
    text: "State",
    disabled: true
  },
  {
    value: "New South Wales",
    text: "New South Wales"
  },
  {
    value: "Victoria",
    text: "Victoria"
  },
  {
    value: "Queensland",
    text: "Queensland"
  },
  {
    value: "Western Australia",
    text: "Western Australia"
  },
  {
    value: "South Australia",
    text: "South Australia"
  },  
  {
    value: "Tasmania",
    text: "Tasmania"
  },
  {
    value: "Australian Capital Territory",
    text: "Australian Capital Territory"
  },
  {
    value: "Northern Territory",
    text: "Northern Territory"
  },
]

const ageFilterOptions = [
  {
    value: "none",
    text: "Age group",
    disabled: true
  },
  {
    value: "0-29",
    text: "Under 30"
  },
  {
    value: "30-39",
    text: "30-39"
  },
  {
    value: "40-49",
    text: "40-49"
  },
  {
    value: "50-59",
    text: "50-59"
  },
  {
    value: "60-100",
    text: "Over 60"
  },
]

const sortOptions = [
  {
    value: "none",
    text: "Category",
    disabled: true
  },
  {
    value: "firstName",
    text: "First name"
  },
  {
    value: "lastName",
    text: "Last name"
  },
  {
    value: "age",
    text: "Age"
  },
]

function Filter(props) {
  return (
    <div className="search-sort-filter-div">
      <Search
        handleNameSearch={props.handleNameSearch}
      />
      <hr id="search-hr"></hr>
      <div className="sort-filter-div">
      <div className="filter-div">
        <span className="span-label">Filter By: </span>
       
        <Select
          type="state"
          filterOptions={stateFilterOptions}
          handleFilterChange={props.handleStateFilterChange}
        />
        
        <Select 
          type="age"
          filterOptions={ageFilterOptions}
          handleFilterChange={props.handleAgeFilterChange}
        />
        
        <button id="apply-filter-btn" className="sort-btn" onClick={props.filterEmployees}><FcFilledFilter></FcFilledFilter></button>
        
        <button id="clear-filter-btn" className="sort-btn" onClick={props.removeFilter}><FcClearFilters></FcClearFilters></button>
      </div>
      <div className="sort-div">
        <span className="span-label">Sort By: </span>
       
        <Select
            type="sort"
            filterOptions={sortOptions}
            handleFilterChange={props.handleSortChange}
        />
        
        <button id="asc-btn" className="sort-btn" onClick={props.sortEmployeesAsc}><FcGenericSortingAsc></FcGenericSortingAsc></button>
        
        <button id="desc-btn" className="sort-btn" onClick={props.sortEmployeesDesc}><FcGenericSortingDesc></FcGenericSortingDesc></button>
        
        <button id="clear-sort-btn" className="sort-btn" onClick={props.removeSort}><MdClear></MdClear></button>
      </div>
      </div>
    </div>
  )
}

export default Filter;