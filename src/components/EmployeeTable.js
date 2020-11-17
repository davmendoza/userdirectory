import React, { useState, useEffect } from "react";
import EmployeeRow from "./EmployeeRow";
import NameSortLink from "./NameSortLink";
import NameFilterInput from "./NameFilterInput";

import compareNames from "../utils/compareNames";

function EmployeeTable(props) {
    const [filteredEmployees, setFilteredEmployees] = useState(props.employees);
    const [filterState, setFilterState] = useState("");
    const [sortDirection, setSortDirection] = useState(1);

    //let employeeRecords = props.employees.slice(0);



    function toggleSortDirection(event) {
        event.preventDefault();
        event.stopPropagation();
        setSortDirection(-1 * sortDirection);
    }

    useEffect(function () {
        let filteredRecords = props.employees;

        if (filterState !== '') {
             filteredRecords = props.employees
            .filter(employeeRecord => {
                return employeeRecord.name.first.startsWith(filterState)
                    || employeeRecord.name.last.startsWith(filterState);

            })
            
        }
        filteredRecords
                .sort(compareNames(sortDirection));

            setFilteredEmployees(filteredRecords);
    }, [props.employees, sortDirection, filterState]);

    function onFilterChange(event) {
        const { value } = event.target;

        setFilterState(value);
    }

    return (
        <div>
            <br />
            <NameFilterInput filterState={filterState} onFilterChange={onFilterChange} ></NameFilterInput>
            <br />
            <table>
                <thead>
                    <tr>
                        <th><NameSortLink toggleSortDirection={toggleSortDirection} /> </th>
                    </tr>
                </thead>

                <tbody>
                    {

                        filteredEmployees.map(employeeRecord =>
                            (<EmployeeRow employeeRecord={employeeRecord} key={employeeRecord.id.value} />))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default EmployeeTable;