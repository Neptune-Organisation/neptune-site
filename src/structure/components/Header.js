import React, {useState} from "react"
import NeptuneIcon from "../../assets/icons/neptuneIcon.png"
import WaveIcon from "../../assets/icons/waveMenu.png"
import { Navbar } from "./Navbar"

export const Header = () => {

    const [navState, setNavState] = useState("--hidden")
    const updateNavState = () => {
        navState === "--hidden" ? setNavState("--show") : setNavState("--hidden")
    }
    return(
        <section className="header">
            <div className="header__up">
                <img src={NeptuneIcon} alt="" className="iconMed header__icon"/>
                <img src={WaveIcon} alt="" className="iconMed header__icon neptune-shorthand" onClick={() => updateNavState() } />
                {/* <Navbar navbarClass = "header__navbar" /> */}
                <nav className={`header__navbar${navState}`}>
                    <a href="/" className="header-link">Home</a>
                    <a href="/aboutneptune" className="header-link">About Neptune</a>
                    <a href="/components" className="header-link">Components</a>
                    <a href="/ussage" className="header-link">Ussage</a>
                    <a href="/aboutme" className="header-link">About me</a>
                    <a href="/contact" className="header-link">Contact</a>
                </nav>
            </div>
        </section>
    )
}
