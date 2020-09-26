import React from 'react';
import classes from './App.module.css';
import QuoteBox from "./containers/QuoteBox/QuoteBox";
import Modal from "./components/UI/Modal/Modal";
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChevronRight, faQuoteLeft)

function App() {

  return (
    <div className={classes.App}>
      <Modal />
      <QuoteBox />
    </div>
  );
}

export default App;
