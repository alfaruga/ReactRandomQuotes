import classes from "./Author.module.css";
import React from "react";

const author = (props) => {
    let name;
    if (props.authorName === `"`) {
        name = "Unknow";
    } else {
        name = "~" + props.authorName.replace('"', "") + "~";
    }
    return (<div className={classes.Author}>
        <p id="author">{name}</p>
    </div>)
}

export default author;