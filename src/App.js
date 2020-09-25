import React from 'react';
import classes from './App.module.css';
import QuoteBox from "./containers/QuoteBox/QuoteBox";

function App() {
  return (
    <div className={classes.App}>
      <QuoteBox />
    </div>
  );
}

export default App;
