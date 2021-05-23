import React, { Component } from "react";
import API from "../../utils/API";
import Filter from "../Filter";
import TableData from "../TableData";
import Mark from "mark.js"  //for search function
import "./Table.css";

let employees;

class Table extends Component {
  state = {
    results: {},
    sortedResults: {},
    stateFilter: "",
    ageFilter: "",
    sortCategory: "",
    search: ""
  }

  // Grab random employees upon mounting React component
  componentDidMount() {
        API.getEmployee()
          .then(res => {
            this.setState({ results: res.data });
            employees = this.state.results;
            console.log(this.state.results);
          })
          .catch(err => console.log(err))
      }

  // Check first & last names for search matches, use Mark.js to highlight matches
  handleNameSearch = event => {
    this.setState({search: event.target.value.trim().toLowerCase()}, () => {
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

  // Update state of state/territory select element
  handleStateFilterChange = event => {
    const stateToFilter = event.target.value;
    this.setState({
      stateFilter: stateToFilter
    });
  };

  // Update state of age group select element
  handleAgeFilterChange = event => {
    const ageToFilter = event.target.value;
    this.setState({
      ageFilter: ageToFilter
    });
  };

  // Handle filter button click 
  filterEmployees = event => {
    event.preventDefault();
    if (employees.results) {
      const stateFilter = this.state.stateFilter;
      const filteredEmployeesByState = employees.results.filter(employee => employee.location.state === stateFilter);
      const ageFilterSplit = this.state.ageFilter.split("-");
      const ageFilterMin = parseInt(ageFilterSplit[0]);
      const ageFilterMax = parseInt(ageFilterSplit[1]);
      let filteredEmployeesByAge = [];
      let results;

      if (stateFilter === "" && this.state.ageFilter === "") {
        return;
      }

      if (stateFilter === "") {
        employees.results.forEach(employee => {
          if (employee.dob.age >= ageFilterMin && employee.dob.age <= ageFilterMax) {
            filteredEmployeesByAge.push(employee);
          }
        });

        results = {
          results: filteredEmployeesByAge
        }

      } else if (this.state.ageFilter === "") {
        results = {
          results: filteredEmployeesByState
        }
      } else {
        filteredEmployeesByState.forEach(employee => {
          if (employee.dob.age >= ageFilterMin && employee.dob.age <= ageFilterMax) {
            filteredEmployeesByAge.push(employee);
          }
        });

        results = {
          results: filteredEmployeesByAge
        }

      }

      this.setState({
        results: results,
        filtered: true
      });
    }
  };

  // Handle remove filter button click
  removeFilter = () => {
    this.setState({
      results: employees,
      stateFilter: "",
      ageFilter: "",
      filtered: false
    });

    document.querySelector("#state-select").value = "none";
    document.querySelector("#age-select").value = "none";
    document.querySelector("#sort-select").value = "none";
  };

  // Update state of sort category select element
  handleSortChange = event => {
    const categoryToSort = event.target.value;
    this.setState({
      sortCategory: categoryToSort
    });
  };

  // Handle ascending button click
  sortEmployeesAsc = () => {
    const category = this.state.sortCategory;
    const results = this.state.results.results;
    let sorted;
    if (category === "") {
      return;
    }

    switch(category) {
      case "firstName":
        sorted = [...results].sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        break;
      case "lastName":
        sorted = [...results].sort((a, b) => a.name.last > b.name.last ? 1 : -1)
        break;
      default:
        sorted = [...results].sort(function(a, b) {
          return new Date(b.dob.date) - new Date(a.dob.date);
        });
        break;
    }

    const sortedResults = {
      results: sorted
    }

    this.setState({
      results: sortedResults
    })
  };

  // Handle descending button click
  sortEmployeesDesc = () => {
    const category = this.state.sortCategory;
    const results = this.state.results.results;
    let sorted;
    if (category === "") {
      return;
    }

    switch(category) {
      case "firstName":
        sorted = [...results].sort((a, b) => b.name.first > a.name.first ? 1 : -1)
        break;
      case "lastName":
        sorted = [...results].sort((a, b) => b.name.last > a.name.last ? 1 : -1)
        break;
      default:
        sorted = [...results].sort(function(a, b) {
          return new Date(a.dob.date) - new Date(b.dob.date);
        });
        break;
    }

    const sortedResults = {
      results: sorted
    }
  
    this.setState({
      results: sortedResults
    })
  };

  // Handle un-sort button click 
  removeSort = () => {
    this.setState({
      results: employees,
      sortCategory: ""
    });
    console.log(employees)
    console.log(this.state.results)

    document.querySelector("#sort-select").value = "none";
  };

  // Abbreviate Australian state names to display on table
  abbrievateState = (stateName) => {
    switch(stateName) {
      case "New South Wales":
        return "NSW";
      case "Victoria":
        return "VIC";
      case "Queensland":
        return "QLD";
      case "Western Australia":
        return "WA";
      case "South Australia":
        return "SA";
      case "Tasmania":
        return "TAS";
      case "Australian Capital Territory":
        return "ACT";
      default:
        return "NT";
    }
  };

  render() {
    return (
      <div className="main-div">
        <Filter
          handleNameSearch={this.handleNameSearch}
          handleStateFilterChange={this.handleStateFilterChange}
          handleAgeFilterChange={this.handleAgeFilterChange}
          filterEmployees={this.filterEmployees}
          removeFilter={this.removeFilter}
          handleSortChange={this.handleSortChange}
          sortEmployeesAsc={this.sortEmployeesAsc}
          sortEmployeesDesc={this.sortEmployeesDesc}
          removeSort={this.removeSort}
        />
        <div className="table-div">
          <table className="employee-table">
            <thead>
              <tr>
              <th id="th-2" className="img img-th th" rowSpan="2">PHOTO</th>
                <th id="th-1" className="name name-th th" colSpan="2"></th>
                <th id="th-3" className="dob dob-th th" rowSpan="2">
                  DOB
                </th>
                <th id="th-4" className="address address-th th hide-th" rowSpan="2">
                  ADDRESS
                </th>
                <th id="th-5" className="email email-th th hide-th" rowSpan="2">
                  EMAIL
                </th>
                <th id="th-6" className="phone phone-th th hide-th" rowSpan="2">
                  MOBILE
                </th>
              </tr>
              <tr>
                <th className="first-th th">FIRST</th>
                <th className="last-th th">LAST</th>
              </tr>
            </thead>
            <tbody className="search-results">
              {this.state.results.results ? (
                this.state.results.results.map(result => (
                  <TableData 
                    image={result.picture.medium}
                    firstName={result.name.first}
                    lastName={result.name.last}
                    dob={result.dob.date}
                    address={`${result.location.street.number} ${result.location.street.name}, ${result.location.city}, ${this.abbrievateState(result.location.state)}`}
                    email={result.email}
                    phone={result.cell}
                    key={`key-${this.state.results.results.indexOf(result)}`}
                  />
                ))
              ) : (
                <tr>
                  <td id="no-employees" colSpan="7">No employees to display <i className="fas fa-exclamation-triangle"></i></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    )
  };
};

export default Table;