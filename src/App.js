import React, { useState, useEffect } from 'react';
import "./firebase"

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

  return (
    <div className="App">
      {<Header />}
      <Main />
      {<Footer />}
    </div>
  );
}

export default App;
