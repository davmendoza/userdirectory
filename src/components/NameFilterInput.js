import React from "react";
import NameSortLink from "./NameSortLink";

function NameFilterInput() {
    return (
        <div>
        <label for= "filter-input">Filter List By Name</label>
        <input type="text" value="" name="filterInput" id ="filter-input" />
        </div>
    )
}

export default NameFilterInput;