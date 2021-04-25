import React from "react";
import "./TableData.css";

function TableData(props) {
    return (
      <tr className="tr">
        <td className="td">{props.name}</td>
        <td className="td">{props.phone}</td>
        <td className="td">{props.email}</td>
        <td className="td">{props.address}</td>        
      </tr>
    )
  }
  
  export default TableData;