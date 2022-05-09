import React, {useState, useEffect} from "react"
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

console.log("HELLO FROM FIREBASE")

export const FirebaseConnection = () => {
  const [books, setBooks] = useState([]);
  const booksColRef = collection(db, 'books');
  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksColRef);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    console.log("HELLO FROM FIREBASE CONNECTION FUNCTION")
    console.log("BOOKS IN FIREBASE CONNECTION", books)
    getBooks();
  }, []);
};
