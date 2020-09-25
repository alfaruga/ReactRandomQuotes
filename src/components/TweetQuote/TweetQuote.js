import React from "react";
import classes from "./TweetQuote.module.css"
const tweetQuote = (props) => {
    return (<button className={classes.TweetQuote} id="tweet-quote" onClick={props.clicked}>Tweet quote</button>)

}

export default tweetQuote;
