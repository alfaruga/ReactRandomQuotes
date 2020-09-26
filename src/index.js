import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";


firebase.initializeApp({
  apiKey: "AIzaSyB9DUafqP3g7J7s-75XdSMXnr5cuj7eWLc",
  authDomain: "alfarugalibrary.firebaseapp.com",
  databaseURL: "https://alfarugalibrary.firebaseio.com",
  projectId: "alfarugalibrary",
  storageBucket: "gs://alfarugalibrary.appspot.com",
  messagingSenderId: "219109530854",
  appId: "1:219109530854:web:82554172dd96132c2e6f27",
  measurementId: "G-4QYSJX9ZNK"
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
