import React from "react";
import classes from "./Text.module.css";
import NewQuote from "../../components/NewQuote/NewQuote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const text = (props) => {
    let editedText = props.textContent.replace(/^"|\.*"$/g, "");
    return (<div className={classes.Container}>
        <FontAwesomeIcon icon="quote-left" />
        <p id="text" className={classes.Text}>{editedText}</p>
        <NewQuote clicked={props.clicked} />

    </div>)
}

export default text;
