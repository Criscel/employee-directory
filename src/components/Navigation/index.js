import React from 'react';

import "./Navigation.css";

function Navigation(props) {
    return (
        // <nav className="navbar navbar-light bg-light justify-content-between">
        //     <a className="navbar-brand">Employee Directory</a>
        //     <form className="form-inline">
        //         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        //     </form>
        // </nav>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <h1 className="navbar-brand" href="/">Employee Directory</h1>
            <div className="search-div">
                <span className="span-label">Search</span>
                 <div className="searchbar-div">
                    <input className="searchbar" placeholder="Employee" onChange={props.handleNameSearch}></input>
                </div>
            </div>
        </nav>

    )
}

export default Navigation;