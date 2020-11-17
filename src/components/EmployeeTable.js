import React from "react";
import EmployeeRow from "./EmployeeRow";

import compareNames from "../utils/compareNames"

function EmployeeTable(props) {
    return(
        <table>
            <thead>
                <th>Full Name</th>
            </thead>
            <tbody>
                {
                    props.employees
                    .sort(compareNames)
                    .map((employeeRecord) => 
                    (<EmployeeRow employeeRecord={employeeRecord}/>))
                }
             </tbody>
        </table>
    )

}

export default EmployeeTable;