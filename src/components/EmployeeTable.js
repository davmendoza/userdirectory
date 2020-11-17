import React from "react";
import EmployeeRow from "./EmployeeRow";

import compareNames from "../utils/compareNames";

function EmployeeTable(props) {
    let employeeRecords = props.employees.slice(0);

    employeeRecords.sort(compareNames(1));
    return(
        <table>
            <thead>
                <tr>
                <th>Full Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    employeeRecords.map(employeeRecord => 
                    (<EmployeeRow employeeRecord={employeeRecord} key={employeeRecord.id.value} />))
                }
             </tbody>
        </table>
    )

}

export default EmployeeTable;