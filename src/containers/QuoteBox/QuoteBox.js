import React, { Component } from "react";
import classes from "./QuoteBox.module.css"
import Text from "../../components/Text/Text";
import Author from "../../components/Author/Author";
import NewQuote from "../../components/NewQuote/NewQuote";
import TweetQuote from "../../components/TweetQuote/TweetQuote";
import axios from "../../axiosquotes";
import Aux from "../../hoc/Aux";


class QuoteBox extends Component {
    state = {
        quotes: null,
        error: true,
        screenQuote: null,
        screenAuthor: null,
        maxQuotes: null,
        tweetIntent: "%22Mi%20nombre%20es%20Ozymandias%2C%20rey%20de%20reyes%3A%20%C2%A1Contemplad%20mis%20obras%2C%20poderosos%2C%20y%20desesperad!%22%20Percy%20Bysshe%20Shelley%22",
    }

    componentDidMount() {
        axios.get("quotes.json")
            .then(response => {
                console.log("Quote box did mount")
                this.setState({
                    quotes: response.data,
                    error: false,
                    maxQuotes: response.data.length,
                    screenAuthor: response.data[0]["author"],
                    screenQuote: response.data[0]["title"],

                })
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            })

    }
    newQuoteHandler = () => {
        let random = Math.floor(Math.random() * this.state.maxQuotes) + 1;
        let texto = this.state.quotes[random];
        console.log(texto);

        this.setState({
            screenQuote: texto["title"],
            screenAuthor: texto["author"],
        })
    }
    tweetQuoteHandler = () => {
        let tweetIntent = "http://twitter.com/intent/tweet?text=";
        let text = { ...this.state };
        text = encodeURIComponent(text["screenQuote"] + text["screenAuthor"]);
        tweetIntent = tweetIntent + text;
        this.setState({
            tweetIntent: tweetIntent
        })


    }
    render() {
        let content = this.state.error ? <h1>loading</h1>
            : [<Aux>
                <Text textContent={this.state.screenQuote} />
                <Author authorName={this.state.screenAuthor} />
                <NewQuote clicked={this.newQuoteHandler} />
                <TweetQuote tweetIntent={this.state.tweetIntent} clicked={this.tweetQuoteHandler} />
            </Aux>]
        return (<div id="quote-box" className={classes.QuoteBox}>THis dude
            {content}

        </div>)
    }
}

export default QuoteBox;