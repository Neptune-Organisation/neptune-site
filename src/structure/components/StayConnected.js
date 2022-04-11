import NeptuneIcon from "../../assets/icons/neptuneIcon.png"
import SquareIcon from "../../assets/icons/squareIcon.svg"

const StayConnected = () => {
    return(
        <section className="stay-connected">
            <div className="stay-connected__content">
                <h2>Let's connect!</h2>
                <div className="down-container">
                    {/* <img src={NeptuneIcon} alt="" className="iconMed"/> */}
                    <label htmlFor="">Get the last updates
                        <input type="email" />
                        <button className="stay-connected__btn">Send</button>
                    </label>
                    {/* <img src={SquareIcon} alt="" className="iconMed"/> */}
                </div>
            </div>
        </section>
    )
}

export default StayConnected