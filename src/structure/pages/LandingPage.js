import { PageTitle, SectionTitle, Headline } from "neptunes-components";
export const LandingPage = () => {
  return (
    <div className="landing-page">
      <PageTitle pageTitle = "Neptune" />
      <Headline headline = "Tools to develope your front-end application faster and easier" headlineClass= "landing-page__headline" />
      <section>
        <>
          <p className="landing-page__paragraph">
            UI Component Libraries <span></span>
          </p>
        </>
        <>
          <p className="landing-page__paragraph">Preserve function sepparation by avoiding in-line style.</p>
        </>
        <>
          <p className="landing-page__paragraph">
            Make Web Dev more human-friendly and keep always a meaning attached
            to all your code: components are named using UI terminology
          </p>
        </>
        <>
          <p>
            Enjoy tools that aim to facilitate communication between designers,
            back-end and front-end developers
          </p>
        </>
      </section>
     {/*  <section>
        <h3>Acknowledgment</h3>
        <p>
          I'm a self-made developer, which means I'm plenty of failures. Lucky
          me there's some people who saved me from myself:
        </p>
        <ul>
          <li>
            DCI for giving me the framework to develop this almost-a-framework
          </li>
          <li>
            My teachers Patrick…, Bleda Stark, Fabian Darga, Maxim W, Tun Huan
            and Giacomo.
          </li>
          <li>
            Patricia … for the advice for the most common aspect-ratios for
            images.
          </li>
          <li>
            Alejandro … for your moral support and all the shared knowledge.
          </li>
          <li>
            And Carlos Perez Ortolá for his inconditional and more than generous
            support along the years, besides a good inpiration and feedback in
            UI / UX
          </li>
        </ul>
      </section> */}
    </div>
  );
};
