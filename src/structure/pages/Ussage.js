import { PageTitle, SectionTitle, Body, Headline } from 'neptunes-components';
import { SubHeadline } from 'neptunes-components';
export const Ussage = () => {
  return (
    <>
      <PageTitle pageTitle="How to use it" />
      <div className="ussage__section">
        <SectionTitle sectionTitle="Basic Ussage" />
        <p>Import the component as ussual at the top of your document</p>
        <p>Pass the required (and the wished) properties as props.</p>
        <p>
          As usual, after installed neptunes-components{' '}
          <a href="" className="link">
            (read the installation guide)
          </a>{' '}
          import the wanted component/s at the document's begining{' '}
        </p>
        <p className="code">import {'{Card}'} from "neptunes-components"</p>
        <Body body="Then call the component at the places you need them and pass the needed and wanted properties" />
      </div>
      <div className="ussage__section">
        <SectionTitle sectionTitle="Required & Optional Props" />
        <p>Components take two kind of properties: <span className='ussage__headline'>required and optional</span> </p>
        <div className="ussage__accent-element">
          <SubHeadline subHeadline="Required : most ussually refered to the content" />
          <ul>
            <li className="code">{`{<Body body = "Your Text Here" />}`}</li>
            <li className="code">{`{<Button txt = "Submit" />}`}</li>
          </ul>
          <SubHeadline subHeadline="Optional: the rest of the parameters. Neptune states a default value for some properties" />
          <ul>
            <li className="code">{`{<Body bodyClass = "your-class" />}`}</li>
            <li className="code">{`{<ImageGroup groupTitle = "Your Title Here" />}`}</li>
          </ul>
        </div>
        <SectionTitle  sectionTitle = "Required Props List" />
        <table>
          <tr>
            <th>Component</th>
            <th>Prop Description</th>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Button</td>
            <td>txt (text inside)</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Icon</td>
            <td>icon (which icon from the React-Icon library)</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">MediaPlayer</td>
            <td>mediaUrl (link to fed the component)</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Image</td>
            <td>imgUrl (link to fed the component)</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">InputField</td>
            <td>label</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Form</td>
            <td>
              fields (an array of InputField components, so it's an array of
              string "labels")
            </td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Card</td>
            <td>
              there's no obligated field, but you'll probably use at least
              cardTitle or fName ( + lName). The call is yours.
            </td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Aside</td>
            <td>links (an array of links => an array of string "linkUrl")</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">SelectOption </td>
            <td>txt</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">DropdownMenu</td>
            <td>menuOptions{'(an array of options => an array of strings)'}</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Shorthand</td>
            <td>
              navbars{'(an array of links => link {(link, linkUrl)}'} and type
              (to define the kind of shorthandMenu)
            </td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Picker</td>
            <td>pickerType to define the kind of picker you want</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">Navbar</td>
            <td>navbars{'(an array of links => link {(link, linkUrl)}'}</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">
              TextComponents = [... Subheadline ]
            </td>
            <td>nameOfComponent</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">ButtonGroup</td>
            <td>buttons (array of txt)</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">CardGroup</td>
            <td>1+ properties from a card {'(look Card {link})'}</td>
          </tr>
          <tr>
            <td className="ussage__table-lineTitle">MediaPlayerGroup</td>
            <td>
              mediaUrls (array of links to media [ussually videos or audios])
            </td>
          </tr>
        </table>
        
      </div>
      <SectionTitle sectionTitle="Naming conventions" />
      <Body body="I know, it can be discouraging learning a new namingConvention. That's why I tried to avoid it as much as possible. Where no other solution where possible, a naming convention was designed, so props are as clear and cohesive as possible." />
      <ul>
        <li className="ussage__rule">
          <div>
            <p className="ussage__rule-title">
              Every property has himself as name
            </p>
            <p>
              {'<InputField label={label} />'}
              {'<Icon icon={icon} />'}
            </p>
          </div>
        </li>
        <li className="ussage__rule">
          <div>
            <p className="ussage__rule-title">
              Some names need a second suffix as clarification. That's the case
              of: class, url, type
            </p>
          </div>
        </li>
        <li className="ussage__rule">
          <div>
            <p className="ussage__rule-title">
              Class has always the element that describes in front
            </p>
            <ul>
              <li>bodyClass</li>
              <li>inputClass</li>
              <li>inputFieldCass</li>
            </ul>
            <p className="ussage__rule-title">the same goes for url</p>
            <ul>
              <li>linkUrl</li>
              <li>imgUrl</li>
            </ul>
            <p className="ussage__rule-title">and for type</p>
            <ul>
              <li>pickerType</li>
            </ul>
          </div>
        </li>
        <li className="ussage__rule">
          <div>
            <p className="ussage__rule-title">no word is shortened, but</p>
            <ul>
              <li>{'image => img'}</li>
              <li>{'text => txt'}</li>
              <li>{'fName => first name'}</li>
              <li>{'lName => last name'}</li>
            </ul>
          </div>
        </li>
        <li className="ussage__rule">
          <p>
            <span className="ussage__headline">
              a single element uses a word in singular.{' '}
            </span>
            A groupOfElements{' '}
            {'ie {ButtonGroup, ImageGroup, MediaPlayerGroup, ...}'} uses a word
            in plural
          </p>
          <Body body = "A link has a single url:" />
          <Body
            body="{<Link linkUrl = {linkUrl} />}"
            bodyClass="code"
          />
          <Body body = "But a group of buttons has many buttonS and therefore:" />
          <Body
            body="{<ButtonGroup buttons = {buttons />}"
            bodyClass="code"
          />
        </li>
      </ul>
      <div className="ussage__section">
        <SectionTitle sectionTitle="Naming & Group Components" />

        <p className="ussage__rule-title">Every GroupComponent has a</p>
        <ul>
          <li>
            {' '}
            <span className="ussage__headline">groupTitle optional.</span> Style
            can be defined with GroupTitleClass
          </li>
          <li className="ussage__rule">
            {' '}
            <span className="ussage__headline">
              groupClass to eventually define the whole component's style
            </span>
          </li>
          <li className="ussage__rule">
            <span className="ussage__headline">
              baseClass, that defines an style for every component.
            </span>{' '}
            That allows to style every component at once, and at the same time
            gives the flexibility to style distinctly one or more different
            component in a group{' '}
          </li>
        </ul>
      </div>
      <div className="ussage__section">
        <SectionTitle sectionTitle="Styling" />
        <p>Styling works through classes. Inline style is disregarded</p>
        <p>
          Every component in Neptune is already styled. That befrees you from
          write classes if no need to. At the same time you can overwrite
          default classes easily by passing the proper class rule
        </p>
        <Body body="{<Body body = `Default Class Body` />}" bodyClass="code" />
        <Body
          body="{<Body body = `Default Class Body` bodyClass = `accent Text` /> }"
          bodyClass="ussage__example"
        />
      </div>
    </>
  );
};
