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

const app = initializeApp(firebaseConfig);

// init services

export const db = getFirestore(app);

// Get a list of books from your database
async function getCities(db) {
  const booksCol = collection(db, 'books');
  const bookSnapshot = await getDocs(booksCol);
  const bookList = bookSnapshot.docs.map(doc => doc.data());
  return bookList;
}

/* const colRef = collection(db, 'books');/*  */
// get collection data

