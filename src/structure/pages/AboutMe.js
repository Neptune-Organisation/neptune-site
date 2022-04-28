import { PageTitle, Image, Body, Link } from 'neptunes-components';
import data from '../../data/aboutMe.json';
console.log(data);
export const AboutMe = () => {
  return (
    <section className="about-me">
      <PageTitle pageTitle="About Me" />
      <Image
        imgUrl="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
        learning about <span className="boldText">awesome technologies</span>{' '}
        and <span className="boldText">design.</span>
      </p>
      <Body body="Let's get in touch!" bodyClass="about-me__body" />
    </section>
  );
};
