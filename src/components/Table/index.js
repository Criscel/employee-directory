import React, { Component } from "react";
import API from "../../utils/API";
import TableRow from "../TableRow";
import "./style.css";

class Table extends Component {
  state = {
    results: []
  }

  componentDidMount() {
    API.getRandomEmployees()
      .then(res => {
        this.setState({ results: res.data });
        console.log(this.state.results);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>DATE OF BIRTH</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>                            
            </tr>
          </thead>
          <tbody>
            {this.state.results.results ? (
              this.state.results.results.map(result => (
                <TableRow 
                  name={`${result.name.first} ${result.name.last}`}
                  dob={result.dob.date}
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
}

export default Table;