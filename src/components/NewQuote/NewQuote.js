import React from "react";
import classes from "./NewQuote.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const newQuote = (props) => {
    return (<button className={classes.NewQuote} id="new-quote" onClick={props.clicked}><FontAwesomeIcon icon="chevron-right" /></button>)
}

export default newQuote;