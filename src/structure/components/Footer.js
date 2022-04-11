import EmailIcon from "../../assets/icons/emailIcon.svg"
import GitIcon from "../../assets/icons/gitIcon.svg"
import TwitterIcon from "../../assets/icons/twitterIcon.svg"

const Footer = () => {
    return(
        <section className="footer">
            <div className="footer__navbar">
                <a href="">Hello</a>
                {/* <a href="mailto:albertclem@protonmail.com" target="__blank">
                    <img src={EmailIcon} alt="" className="iconMed footer__icon"/>
                </a>
                <a href="https://github.com/AlbertLeipzig/scssvessel" target="__blank">
                    <img src={GitIcon} alt="" className="iconMed footer__icon"/>
                </a>
                <a href="https://twitter.com/albert__loewe" target="__blank">
                    <img src={TwitterIcon} alt="" className="iconMed footer__icon"/>
                </a> */}
            </div>
        </section>
    )
}

export default Footer