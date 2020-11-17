import React from "react";
import EmployeeRow from "./EmployeeRow";

function EmployeeTable(props) {
    return(
        <table>
            <thead>
                <th>Full Name</th>
            </thead>
            <tbody>
                {
                    props.employees.map((employeeRecord) => 
                    (<EmployeeRow employeeRecord={employeeRecord}/>))
                }
             </tbody>
        </table>
    )

}

export default EmployeeTable;