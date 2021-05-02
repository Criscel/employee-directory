import React from "react";
import "./TableData.css";

function TableData(props) {
    return (
      <tr className="tr">
          <img src={props.image} alt='Employee' className='td'></img>
        <td className="td">{props.lastname}</td>
        <td className="td">{props.firstname}</td>
        <td className="td">{props.phone}</td>
        <td className="td">{props.email}</td>
        <td className="td">{props.address}</td>        
      </tr>
    )
  }
  
  export default TableData;