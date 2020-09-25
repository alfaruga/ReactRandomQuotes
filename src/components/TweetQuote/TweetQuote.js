import React from "react";

const tweetQuote = (props) => {
    return (<button id="tweet-quote" onClick={props.clicked}><a href={props.tweetIntent}>Tweet quote</a></button>)

}

export default tweetQuote;
