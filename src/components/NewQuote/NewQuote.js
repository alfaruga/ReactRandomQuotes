import React from "react";
import classes from "./NewQuote.module.css";

const newQuote = (props) => {
    return (<button className={classes.NewQuote} id="new-quote" onClick={props.clicked}>New quote</button>)
}

export default newQuote;