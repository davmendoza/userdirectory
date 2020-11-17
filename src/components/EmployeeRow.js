import React from "react";

function EmployeeRow(props) {
    return (
        <tr>
            <td>{props.employeeRecord.name.first} {props.employeeRecord.name.last} </td>
        </tr>
    );
}
export default EmployeeRow;