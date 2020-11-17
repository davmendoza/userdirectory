import React from "react";

function EmployeeRow(props) {
    return (
        <tr>
            <td> <img src={props.employeeRecord.picture.large} alt="random images"></img>
                <ul>
                    <li>Full Name: {props.employeeRecord.name.first} {props.employeeRecord.name.last}</li>
                    <li>Email: {props.employeeRecord.email}</li>
                    <li>Cell Phone Number: {props.employeeRecord.cell}</li>
                </ul>
            </td>
        </tr>
    );
}
export default EmployeeRow;