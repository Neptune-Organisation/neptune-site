import { Body, PageTitle } from 'neptunes-components';
import "../../firebase"

export const Contact = () => {
  return (
    <div className="contact">
      <PageTitle pageTitle="Contact" />
      <div className="contact__content">


        {/* <form>
        <label htmlFor="fName" required>
          First Name
          <input type="text" />
        </label>
        <label htmlFor="fName" required>
          Last Name
          <input type="text" />
        </label>
        <label htmlFor="email" required>
          E-Mail
          <input type="email" />
        </label>
        <label htmlFor="message">
          Message
          <input type="text" />
        </label>
        <button type="submit">Send</button>
      </form> */}
        <p className="contact__content-p">Let's connect on</p>
        <ul>
          <li>
            <a
              href="https://github.com/AlbertLeipzig"
              className="contact__link"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/albert-clemente/"
              className="contact__link"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AlbertLeipzig"
              className="contact__link"
            >
              Twitter
            </a>
          </li>
          <p>
            where I love to share about programing and programing related
            content, or write me an email to{' '}
            <span>
              <a
                href="mailto:albertclem@protonmail.com"
                target="__blank"
                className="contact__link"
              >
                albertclem@protonmail.com
              </a>
            </span>
          </p>
        </ul>
      </div>
    </div>
  );
};
