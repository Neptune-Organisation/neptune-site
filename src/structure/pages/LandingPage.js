import { PageTitle, SectionTitle, Headline } from 'neptunes-components';
export const LandingPage = () => {
  return (
    <div className="landing-page">
      <PageTitle pageTitle="Neptune" />
      <Headline
        headline="Tools to develope your front-end application faster and easier"
        headlineClass="landing-page__headline"
      />
      <section>
        <>
          <p className="landing-page__paragraph">
            UI Component Libraries <span></span>
          </p>
        </>
        <>
          <p className="landing-page__paragraph">
            Preserve function sepparation by avoiding in-line style.
          </p>
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
      <section>
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
            My teachers Patrick Hamm,{' '}
            <a href="https://www.linkedin.com/in/bleda-stark/" target="_blank"  className='link'>
              Bleda Stark
            </a>
            ,{' '}
            <a
              href="https://www.linkedin.com/in/fabian-darga-554b2b124/"
              target="_blank"  className='link'
            >
              Fabian Darga
            </a>
            ,{' '}
            <a href="https://www.linkedin.com/in/maxim-werkhowski-b990611bb/" target="_blank"  className='link'>
              Maxim Werkhowsky
            </a>
            ,{' '}
            <a href="https://www.linkedin.com/in/tun-huang-877a071b2/" target="_blank" className='link'>
              Anton Huan
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/giacomo-tolari/"
              target="_blank" className='link'
            >
              Giacomo Tolari
            </a>
            .
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/patricia-grammetbauer/"
              target="_blank" className='link'
            >
              Patricia Grammetbauer
            </a>{' '}
            for the advice about the most common aspect-ratios for images.
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jorge-alejandro-coronado-cuesta/"
              target="_blank"  className='link'
            >
              Alejandro Coronado
            </a>{' '}
            or your moral support and all the shared knowledge.
          </li>
          <li>
            Last but not least very specially thanks to <a href="https://www.linkedin.com/in/carlos-perez-ortola-19133341/" target="_blank" className='link'>Carlos Perez Ortolá</a> for their generous and unconditional support throughout the ages, as well as inspiration in terms of UI/UX. Nothing of that would have been possible without him.
          </li>
        </ul>
      </section>
    </div>
  );
};
