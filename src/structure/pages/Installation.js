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
        <SubHeadline subHeadline="You can install modules separately" />
        <>
          <SectionTitle sectionTitle="I want the Components" />
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
        </>
        <>
          <SectionTitle sectionTitle="I want the Styles" />
          <Body body="I'm working on it!!" />
          <Body body="Right now the best you can do is go to this repository and copy the SCSS Folder tree." />
          <Link
            link="Github"
            linkUrl="https://github.com/Neptune-Organisation/neptune-styles"
            target="_blank"
          />
          <Link
            link="Npm"
            linkUrl="https://www.npmjs.com/package/neptune-styles"
            target="_blank"
          />
          <p>
            In the near future will be a much better system. Read more about it{' '}
            <a href="/blog">here</a>.
          </p>
        </>
        <>
          <SectionTitle sectionTitle="DB Assistant" />
          <p>
            Clone it{' '}
            <a href="https://github.com/Neptune-Organisation/neptuneFakeDb">
              here
            </a>{' '}
            or use this{' '}
            <a href="https://www.npmjs.com/package/neptunefakedb">
              npm-package
            </a>
          </p>
        </>
        <>
          <SectionTitle sectionTitle="GUI" />
          <p>
            Work In Progress. <a href="">Don't miss the launching!</a>
          </p>
        </>
      </>
    </section>
  );
};
