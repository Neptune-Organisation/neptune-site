import {
  Body,
  Link,
  PageTitle,
  Section,
  SectionTitle,
  SubHeadline,
} from 'neptunes-components';
export const Installation = () => {
  return (
    <section>
      <>
        <PageTitle pageTitle="Installation" />
        <div className="installation__section">
        <SubHeadline subHeadline="You can install modules separately" subHeadlineClass ="installation__subheadline" />
        </div>
        <SectionTitle sectionTitle="Get the Components" />
        <div className="installation__section">
          <Body body="npm i neptunes-components" bodyClass="code" />
          <Link
            linkUrl="https://github.com/Neptune-Organisation/neptune-components"
            target="_blank"
            link="Github"
          />
          <Link
            linkUrl="https://www.npmjs.com/package/neptunes-components"
            target="_blank"
            link="Npm"
          />
        </div>
        <div className="installation__section">
          <SectionTitle sectionTitle="Get the Styles" />
          <Body body="I'm working on it!! Right now the best you can do is clone the repository and copy the SCSS Folder manually into your src." />
          <Link
            link="Github"
            linkUrl="https://github.com/Neptune-Organisation/neptune-styles"
            target="_blank"
          />
        </div>
        <div className="installation__section">
          <SectionTitle sectionTitle="DB Assistant" />
          <p className='installation__WIP' > Work-In-Progress </p>
        </div>
        <div className="installation__section">
          <SectionTitle sectionTitle="GUI" />
          <p className='installation__WIP'> Work-In-Progress </p>
        </div>
      </>
    </section>
  );
};
