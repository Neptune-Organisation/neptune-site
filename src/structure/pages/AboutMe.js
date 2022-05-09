import { PageTitle, Image, Body, Link } from 'neptunes-components';
import data from '../../data/aboutMe.json';
import Portrait from "../../assets/images/portrait.jpg"
export const AboutMe = () => {
  return (
    <section className="about-me">
      <PageTitle pageTitle="About Me" />
      <Image
        imgUrl={Portrait}
        imgClass="half-roundImage about-me__img"
      />
      <Body
        body="Hi, I'm Albert Löwe, a web developer in love with front-end development!"
        bodyClass="about-me__body"
      />
      <p className="about-me__body">
        I was born long ago in an almost unknown little town of Spain called{' '}
        <Link
          linkUrl="https://www.google.com/maps/search/Barcelona/@41.4003015,2.1482578,13z"
          link="Barcelona"
          target="_blank"
        />
      </p>
      <p className="about-me__body">
        Most of my live I was a musician. Although I'm still in contact with
        music, nowadays I spend most of my time thinking on how to{' '}
        <span className="boldText">bring into life every idea I have</span> and
        learning about <span className="bold">awesome technologies</span>{' '}
        and <span className="boldText">design.</span>
      </p>
      <a href="/contact" className='about-me__last-paragraph'>Let's get in touch!</a>
    </section>
  );
};
