import React from "react";
function NameSortLink(props) {
    return <a href="#home" onClick={props.toggleSortDirection}>Sort A to Z or Z to A</a>;
}
export default NameSortLink;