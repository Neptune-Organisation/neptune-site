import Code from "../../assets/images/code.jpg"
import Pc from "../../assets/images/pc.jpg"
import Ui from "../../assets/images/ui.jpg"

const Examples = () => {
    return(
        <section className="examples">
            <h2>Examples</h2>
            <img src={Code} alt="" className="examples__img"/>
            <img src={Pc} alt="" className="examples__img"/>
            <img src={Ui} alt="" className="examples__img"/>
        </section>
    )
}

export default Examples