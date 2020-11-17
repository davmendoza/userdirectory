import React, { useState } from "react";
import EmployeeRow from "./EmployeeRow";
import NameSortLink from "./NameSortLink";
import NameFilterInput from "./NameFilterInput";

import compareNames from "../utils/compareNames";

function EmployeeTable(props) {
    const [sortDirection, setSortDirection] = useState(1);

    let employeeRecords = props.employees.slice(0);

    employeeRecords.sort(compareNames(sortDirection));

    function toggleSortDirection(event) {
        event.preventDefault();
        event.stopPropagation();
        setSortDirection(-1 * sortDirection);
    }

    return (
        <div>
            <NameFilterInput/>
            <table>
                <thead>
                    <tr>
                        <th><NameSortLink toggleSortDirection={toggleSortDirection} /> </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        employeeRecords.map(employeeRecord =>
                            (<EmployeeRow employeeRecord={employeeRecord} key={employeeRecord.id.value} />))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default EmployeeTable;