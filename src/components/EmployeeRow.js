import React from "react";

function EmployeeRow(props) {
    return (
        <tr>
            
            <td> <img src = {props.employeeRecord.picture.large} alt="random images"></img> {props.employeeRecord.name.first} {props.employeeRecord.name.last} </td>
        </tr>
    );
}
export default EmployeeRow;