import { Routes, Route } from 'react-router-dom';
import {LandingPage} from '../pages/LandingPage';
import {AboutMe} from '../pages/AboutMe.js';
import {Blog} from "../pages/Blog"
import {BlogEntry} from "../pages/BlogEntry"
import {Components} from "../pages/Components"
import {Impressum} from "../pages/Impressum"
import {Installation} from "../pages/Installation"
import {Ussage} from "../pages/Ussage"
import {WhatsNeptune} from "../pages/WhatsNeptune"
import { Renderer } from '../components/Renderer.js';

export const Main = () => {
  return (
    <div className="main">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog:id" element={<BlogEntry />} />
        <Route path="/components" element={<Components />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/ussage" element={<Ussage />} />
        <Route path="/aboutneptune" element={<WhatsNeptune />} />
      </Routes>
    </div>
  );
};
