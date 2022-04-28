import { PageTitle } from 'neptunes-components';
export const WhatsNeptune = () => {
  return (
    <section>
      <PageTitle pageTitle="What's Neptune" />
      <div className="subsection">
      <p>
        Neptune is a set of tools to help you develope your front-end
        application faster and easier.
      </p>
      <p>
        It's comprised of 2 libraries, one for the structure called
        neptunes-components and one for the styling called neptunes-styles.
        Neptunes-components is written in react, and neptunes-styles is written
        in scss.
      </p>
      <p>
        Although they are written in order to work together you can use them
        separately if that's what you need.
      </p>
      </div>
      <div className="subsection">
      <p>
        Neptune-components integrates a certain level of data description. I'm
        aware of this inconvenience and already develope a better solution in
        this regard. Till then I wrote some{' '}
        <a href="" target="_blank">
          rules
        </a>{' '}
        that will make props naming easy to handle and remember (hopefully).
      </p>
      <p>
        Nonetheless there's an available file that you can copy and use as
        reference.
      </p>
      <p>
        On top of that there's a provided <a href="" target="_blank"></a>{' '}
        program that allows you to save time by dealing with import syntax for
        icons, fonts, or to define values like hue and sizes (and therefore
        saving palette description as well)
      </p>
      </div>
      <div className="subsection">
      <p>
        Thanks to that you can write a front-end almost entirely from the
        back-end.
      </p>
      <p>
        Addtionally a GUI to help with the first file structure is in
        developement and expected to be launched soon. Check the{' '}
        <a href="" target="_blank">
          blog section
        </a>{' '}
        to find out more and{' '}
        <a href="" target="_blank">
          subscribe to the newsletter
        </a>{' '}
        to not miss any update.
      </p>
      </div>
    </section>
  );
};
