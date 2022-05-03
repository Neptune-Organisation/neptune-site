import { Body, PageTitle } from 'neptunes-components';
export const Contact = () => {
  return (
    <>
      <PageTitle pageTitle="Contact" />
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
      <p>
        Find me in <a href="https://github.com/AlbertLeipzig">Github</a>,
        <a href="https://www.linkedin.com/in/albert-clemente/">Linkedin</a> and
        <a href="https://github.com/AlbertLeipzig">Twitter</a>, where I love to
        share about programing and programing related content
      </p>
    </>
  );
};
