import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8G0Z4NNgXLDQfVUhvE6h7hxc3TGZNyEc',
  authDomain: 'neptune-f2364.firebaseapp.com',
  projectId: 'neptune-f2364',
  storageBucket: 'neptune-f2364.appspot.com',
  messagingSenderId: '588517732361',
  appId: '1:588517732361:web:7f77b65f17c1b9deff88d8',
  measurementId: 'G-309BPJCQVY',
};

// init firebase app

initializeApp(firebaseConfig);

// init services

const db = getFirestore();

// collection ref

const colRef = collection(db, 'books');

// get collection data

getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs)
  })




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

