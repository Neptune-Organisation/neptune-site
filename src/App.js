import { Routes, Route } from 'react-router-dom';
import {Header} from '../src/structure/components/Header.js';
import {Footer} from '../src/structure/components/Footer.js';
import {Main} from '../src/structure/components/Main.js';
import {LandingPage} from './structure/pages/LandingPage.js';
import {AboutMe} from './structure/pages/AboutMe.js';
import {Blog} from "./structure/pages/Blog"
import {BlogEntry} from "./structure/pages/BlogEntry"
import {Components} from "./structure/pages/Components"
import {Impressum} from "./structure/pages/Impressum"
import {Installation} from "./structure/pages/Installation"
import {Ussage} from "./structure/pages/Ussage"
import {WhatsNeptune} from "./structure/pages/WhatsNeptune"
import { Renderer } from './structure/components/Renderer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Components />
      
    {/*
      <Main>
       <Routes>
        <Route exact path = "/" element = {<LandingPage />} />
        <Route path = "/aboutme" element = {<AboutMe />} />
        <Route path = "/blog" element = {<Blog />} />
        <Route path = "/blog:id" element = {<BlogEntry />} />
        <Route path = "/components" element = {<Components />} />
        <Route path = "/impressum" element = {<Impressum />} />
        <Route path = "/installation" element = {<Installation />} />
        <Route path = "/ussage" element = {<Ussage />} />
        <Route path = "/aboutneptune" element = {<WhatsNeptune />} />
      </Routes> 
      </Main>
      */}
      <Footer />
    </div>
  );
}

export default App;
