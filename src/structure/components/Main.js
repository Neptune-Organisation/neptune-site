import { Routes, Route } from "react-router-dom"
import {LandingPage} from "../pages/LandingPage"
import {Blog} from "../pages/Blog"
import {BlogEntry} from "../pages/BlogEntry"
import {AboutMe} from "../pages/Aboutme"
import Impressum from "../pages/Impressum"
const Main = () => {
    return(
        <div className="main">
            <LandingPage />
        </div>
    )
}

export default Main