import NeptuneIcon from "../../assets/icons/neptuneIcon.png"
import WaveIcon from "../../assets/icons/waveMenu.png"
import { Navbar } from "./Navbar"

export const Header = () => {
    return(
        <section className="header">
            <div className="header__up">
                <img src={NeptuneIcon} alt="" className="iconMed header__icon"/>
                <img src={WaveIcon} alt="" className="iconMed header__icon"/>
                {/* <Navbar /> */}
            </div>
        </section>
    )
}
