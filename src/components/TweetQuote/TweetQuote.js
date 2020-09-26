import React from "react";
import classes from "./TweetQuote.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tweetQuote = (props) => {
    return (<button className={classes.TweetQuote} id="tweet-quote" onClick={props.clicked}><FontAwesomeIcon icon={["fab", "twitter"]} /></button>)

}

export default tweetQuote;
