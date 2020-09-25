import React from "react";

const author = (props) => {
    let name;
    if (props.authorName === `"`) {
        name = "Unknow";
    } else {
        name = props.authorName.replace('"', "");
    }
    return (<div>
        <p id="author">{name}</p>
    </div>)
}

export default author;