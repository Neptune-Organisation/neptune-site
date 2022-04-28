import NeptuneIcon from "../../assets/icons/neptuneIcon.png"
import WaveIcon from "../../assets/icons/waveMenu.png"

export const Header = () => {
    return(
        <section className="header">
            <div className="header__up">
                <img src={NeptuneIcon} alt="" className="iconMed header__icon"/>
                <img src={WaveIcon} alt="" className="iconMed header__icon"/>
            </div>
        </section>
    )
}
