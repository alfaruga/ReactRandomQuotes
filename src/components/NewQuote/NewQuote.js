import React from "react";
import classes from "./NewQuote.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const newQuote = (props) => {
    return (
        <div className={classes.NewQuote}>
            <FontAwesomeIcon icon="chevron-right" className={classes.Icon} />
            <button id="new-quote" onClick={props.clicked}>New quote</button>
        </div>)
}

export default newQuote;