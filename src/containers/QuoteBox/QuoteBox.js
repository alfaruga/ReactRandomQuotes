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
    }

    componentDidMount() {
        axios.get("quotes.json")
            .then(response => {
                console.log("QUote box did mount")
                this.setState({
                    quotes: response.data,
                    error: false,
                    maxQuotes: response.data.length,

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
    render() {
        let content = this.state.error ? <h1>loading</h1>
            : [<Aux>
                <Text textContent={this.state.screenQuote} />
                <Author authorName={this.state.screenAuthor} />
                <NewQuote clicked={this.newQuoteHandler} />
                <TweetQuote />
            </Aux>]
        return (<div id="quote-box" className={classes.QuoteBox}>THis dude
            {content}

        </div>)
    }
}

export default QuoteBox;