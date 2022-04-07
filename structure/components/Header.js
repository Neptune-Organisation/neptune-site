import NeptuneIcon from "../../assets/icons/neptuneIcon.png"
import WaveIcon from "../../assets/icons/waveMenu.png"

const Header = () => {
    return(
        <section className="header bg-dark">
            <div className="header__up">
                <img src={NeptuneIcon} alt="" className="iconMed header__icon"/>
                <img src={WaveIcon} alt="" className="iconMed header__icon"/>
            </div>
            {/* <div className="header__mid">
                <h1 className = "main-title">{mainTitle}</h1>
                <h1 className = "page-title">{pageTitle}</h1>
            </div>
            <div className="header__down">
                <p>UI Component Library</p>
                <p>based on React and SCSS</p>
            </div> */}
        </section>
    )
}

export default Header