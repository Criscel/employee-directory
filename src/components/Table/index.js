import React, { Component } from "react";
import API from "../../utils/API";
//import Filter from "../Filter";
import TableData from "../TableData";
import Mark from "mark.js"  //for search function
import "./Table.css";

let employees;

class Table extends Component {
  state = {
    results: [],
    stateFilter: " ",
    sortCategory: " "
  }

  componentDidMount() {
    API.getEmployee()
      .then(res => {
        this.setState({ results: res.data });
        //console.log(res.data)
        // employees = this.state.results;
      })
      .catch(err => console.log(err))
  }

  // checking first and last name search matches
  handleNameSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() }, () => {
      this.markInstance = new Mark(document.querySelectorAll(".name-td"));
      this.markInstance.unmark({
        done: () => {
          this.markInstance.mark(this.state.search)
        }
      });
    });

    const search = event.target.value.trim().toLowerCase();
    if (search !== "" && this.state.results) {
      let searchResults = [];
      employees.results.forEach(result => {
        const fullname = `${result.name.first} ${result.name.last}`;
        if (fullname.toLowerCase().includes(search)) {
          searchResults.push(result);
        }
      });

      const searchResultsObject = {
        results: searchResults
      };

      if (searchResults.length < 1) {
        this.setState({
          results: { results: false }
        });

        return;
      }

      this.setState({
        results: searchResultsObject
      });

    } else {
      this.setState({
        results: employees
      })
    }
  };

  handleStateFilterChange = event => {
    const stateToFilter = event.target.value;
    this.setState({
      stateFilter: stateToFilter
    });
  };


  handleSortChange = event => {
    const categoryToSort = event.target.value;
    this.setState({
      sortCategory: categoryToSort
    });
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>LAST NAME</th>
              <th>FIRST NAME</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.results ? (
              this.state.results.results.map(result => (
                <TableData

                  lastname={result.name.last}
                  firstname={result.name.first}
                  // name={`${result.name.first} ${result.name.last}`}
                  phone={result.cell}
                  email={result.email}
                  address={`${result.location.street.number} ${result.location.street.name} ${result.location.city} ${result.location.state} ${result.location.country}`}
                  key={`key-${this.state.results.results.indexOf(result)}`}
                />
              ))
            ) : (
              <tr>
                <td>No employees to display</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
};

export default Table;