import React, { Component } from "react";
import API from "../../utils/API";
import TableData from "../TableData";
import "./Table.css";

class Table extends Component {
  state = {
    results: []
  }

  componentDidMount() {
    API.getEmployee()
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
              <th>PHONE NUMBER</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>                            
            </tr>
          </thead>
          <tbody>
            {this.state.results.results ? (
              this.state.results.results.map(result => (
                <TableData 
                  name={`${result.name.first} ${result.name.last}`}
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