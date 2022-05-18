import { initializeApp } from "firebase/app";

import {getFirestore, collection, getDocs, getDoc, addDoc, onSnapshot, doc } from "firebase/firestore"

// Initialize Firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyA8G0Z4NNgXLDQfVUhvE6h7hxc3TGZNyEc",

    authDomain: "neptune-f2364.firebaseapp.com",
  
    projectId: "neptune-f2364",
  
    storageBucket: "neptune-f2364.appspot.com",
  
    messagingSenderId: "588517732361",
  
    appId: "1:588517732361:web:7f77b65f17c1b9deff88d8",
  
    measurementId: "G-309BPJCQVY"
  
});

const db = getFirestore(firebaseApp)

const colRef = collection(db, "books")

getDocs(colRef)
    .then((entry) => {
        let books = []
        entry.docs.forEach((doc) => {
            books.push({...doc.data(), id: doc.id })
        } )
        console.log(books)
    .catch(err => {
        console.error(err.message)
    } )

    } )

// single doc

const bookId = "TkAfBX733oPgI4ktpoVE"

const docRef = doc(db, "books", bookId)

getDoc(docRef)
    .then((doc) =>{
        console.log(doc.data(), doc.id)
    } )
    















const docId = "TkAfBX733oPgI4ktpoVE"

