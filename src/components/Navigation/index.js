import React from 'react';
import { FaSearch } from "react-icons/fa";

import "./Navigation.css";

function Navigation(props) {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <h1 className="navbar-brand" href="/">Employee Directory</h1>
            <div className="search-div">
                 <div className="searchbar-div">
                    <input className="searchbar" placeholder="Employee" onChange={props.handleNameSearch}></input>
                    <span className="span-label"><FaSearch></FaSearch></span>
                </div>
            </div>
        </nav>

    )
}

export default Navigation;