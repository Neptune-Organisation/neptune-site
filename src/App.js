import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

import { Routes, Route } from 'react-router-dom';
import { Header } from '../src/structure/components/Header.js';
import { Footer } from '../src/structure/components/Footer.js';
import { Main } from '../src/structure/components/Main.js';
import { LandingPage } from './structure/pages/LandingPage.js';
import { AboutMe } from './structure/pages/AboutMe.js';
import { Blog } from './structure/pages/Blog';
import { BlogEntry } from './structure/pages/BlogEntry';
import { Components } from './structure/pages/Components';
import { Impressum } from './structure/pages/Impressum';
import { Installation } from './structure/pages/Installation';
import { Ussage } from './structure/pages/Ussage';
import { WhatsNeptune } from './structure/pages/WhatsNeptune';
import { Renderer } from './structure/components/Renderer.js';
import { Image } from 'neptunes-components';

/* import { FirebaseConnection } from './firebaseConnection'; */

export function App() {
  const [books, setBooks] = useState([]);
  const booksColRef = collection(db, 'books');
  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksColRef);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBooks();
  }, []);

 
  
  

  return (
    <div className="App">
      {<Header />}
      <Main />
      {<Footer />}
    </div>
  );
}

export default App;
