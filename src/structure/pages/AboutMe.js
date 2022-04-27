import data from "../../data/dataIndex";
console.log(data)
const AboutMe = () => {
    return(
        <section className="about-me">
            <h1>About Me</h1>
            <p className="about-me__body" >Hi, I'm Albert Löwe, a web developer in love with front-end development!</p>
            <p className="about-me__body">I was born long ago in an almost unknown little town of Spain called <a href="https://www.google.com/maps/search/Barcelona/@41.4003015,2.1482578,13z" target="_blank">Barcelona</a>.</p>
            <p className="about-me__body">Most of my live I was a musician. Although I'm still in contact with music, nowadays I spend most of my time thinking on how to <span className="boldText">bring into life every idea I have</span> and learning about <span className="boldText">awesome technologies</span> and <span className="boldText">design.</span></p>
            <p className="about-me__body">Let's get in touch!</p>
        </section>
    )
}

export default AboutMe