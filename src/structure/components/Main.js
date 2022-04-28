import { Routes, Route } from "react-router-dom"
import {LandingPage} from "../pages/LandingPage"
import {Blog} from "../pages/Blog"
import {BlogEntry} from "../pages/BlogEntry"
import {AboutMe} from "../pages/AboutMe"
import Impressum from "../pages/Impressum"
export const Main = () => {
    return(
        <div className="main">
            <LandingPage />
        </div>
    )
}
