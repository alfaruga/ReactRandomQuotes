import React from "react";
import classes from "./Text.module.css";

const text = (props) => {
    return (<div>
        <p id="text" className={classes.Text}>{props.textContent}</p>
    </div>)
}

export default text;