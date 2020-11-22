import React, { useState, useEffect } from "react";
import EmployeeRow from "./EmployeeRow";
import NameSortLink from "./NameSortLink";
import NameFilterInput from "./NameFilterInput";

import compareNames from "../utils/compareNames";

function EmployeeTable(props) {
    const [anyone, setAnyone] = useState(props.anyone);
    const [filteredEmployees, setFilteredEmployees] = useState(props.employees);
    const [sortedEmployees, setSortedEmployees] = useState(filteredEmployees);
    const [filterState, setFilterState] = useState("");
    const [sortDirection, setSortDirection] = useState(1);

    //let employeeRecords = props.employees.slice(0);



    function toggleSortDirection(event) {
        event.preventDefault();
        event.stopPropagation();
        setSortDirection(-1 * sortDirection);
    }

    useEffect(function () {
        console.log(filterState);
        let filteredRecords = props.employees;
       

        if (filterState !== '') {
             filteredRecords = props.employees
            .filter(employeeRecord => {
                return employeeRecord.name.first.toLowerCase().startsWith(filterState)
                    || employeeRecord.name.last.toLowerCase().startsWith(filterState);
                    

            })
            
        }
        

            setFilteredEmployees(filteredRecords);
    }, [props.employees, filterState]);

    useEffect(function () {
       const filteredEmployeesCopy = filteredEmployees.slice(0);

       filteredEmployeesCopy.sort(compareNames(sortDirection));

       setSortedEmployees(filteredEmployeesCopy);
        
    }, [filteredEmployees, sortDirection ])

    function onFilterChange(event) {
        const { value } = event.target;

        setFilterState(value);
    }

    return (
        <div>
            {anyone}
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

                        sortedEmployees.map(employeeRecord =>
                            (<EmployeeRow employeeRecord={employeeRecord} key={employeeRecord.id.value} />))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default EmployeeTable;