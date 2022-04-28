import React from 'react';

import { siteData } from '../../data/dataIndex';
import { componentData } from '../../data/componentsData/dataIndex';
import {
  MediaPlayer,
  Hero,
  Card,
  CardGroup,
  Form,
  Image,
  Icons,
  IconGroup,
  MediaPlayerGroup,
  ImageGroup,
  Picker,
  List,
  Link,
  SelectOption,
  Body,
  Headline,
  PageTitle,
  ArticleTitle,
  SubHeadline,
  SectionTitle,
  HeroTitle,
  GroupTitle,
  Byline,
  Blockquote,
  Button,
  Navbar,
  ButtonGroup,
  Toggle,
  SendButton,
  useContext,
  ColorPicker,
  Slider,
  Text,
  DropdownMenu,
  Footnote,
  Icon,
} from 'neptunes-components';

const Data = componentData;
const singleIcon = Data.iconsData.iconList[0];
export const Renderer = (props) => {
  const component = props.component;

  return (
    <div className="renderer">
      
      {component === 'SelectOption' && (
        <SelectOption
          val={Data.selectOptionData.val}
          txt={Data.selectOptionData.txt}
        />
      )}
      {component === 'Body' && <Body body={Data.textData.body} />}

      {component === 'SubHeadline' && (
        <SubHeadline
          subHeadline={Data.textData.subHeadline}
          subHeadlineClass={Data.textData.subHeadlineClass}
        />
      )}

      {component === 'Card' && (
        <Card
          cardClass={Data.singleCard.cardClass}
          imgUrl={Data.singleCard.imgUrl}
          imgClass={Data.singleCard.imgClass}
          imgAlt={Data.singleCard.imgAlt}
          cardTitle={Data.singleCard.cardTitle}
          titleClass={Data.singleCard.tittleClass}
          fName={Data.singleCard.fName}
          lName={Data.singleCard.lName}
          nameClass={Data.singleCard.nameClass}
          personPosition={Data.singleCard.personPosition}
          personPositionClass={Data.singleCard.personPositionClass}
          bodyClass={Data.singleCard.bodyClass}
          cardBody={Data.singleCard.cardBody}
        />
      )}

      {component === 'DropdownMenu' && (
        <DropdownMenu
          dropdownMenuClass={Data.dropdownMenu.dropdownMenuClass}
          dropdownSelectClass={Data.dropdownMenu.dropdownMenuSelectClass}
          menuOptions={Data.dropdownMenu.menuOptions}
          dropdownMenuLabel={Data.dropdownMenu.dropdownMenuLabel}
          btnClass={Data.dropdownMenu.btnClass}
          txt={Data.dropdownMenu.txt}
        />
      )}

      {component === 'List' && (
        <List
          listClass={Data.listData.listClass}
          listContainerClass={Data.listData.listContainerClass}
          listTitle={Data.listData.listTitle}
          listTitleClass={Data.listData.listTitleClass}
          listEntryClass={Data.listData.listEntryClass}
          listEntries={Data.listData.listEntries}
        />
      )}

      {component === 'Headline' && (
        <Headline headline={Data.textData.headline} />
      )}
      {component === 'ArticleTitle' && (
        <ArticleTitle articleTitle={Data.textData.articleTitle} />
      )}
      {component === 'SectionTitle' && (
        <SectionTitle sectionTitle={Data.textData.sectionTitle} />
      )}
      {component === 'HeroTitle' && (
        <HeroTitle heroTitle={Data.textData.heroTitle} />
      )}
      {component === 'GroupTitle' && (
        <GroupTitle groupTitle={Data.textData.groupTitle} />
      )}
      {component === 'Byline' && <Byline byline={Data.textData.byline} />}
      {component === 'Blockquote' && (
        <Blockquote blockquote={Data.textData.blockquote} />
      )}

      {component === 'Navbar' && <Navbar navbars={Data.navbarData.navbars} />}

      {component === 'Image' && (
        <Image
          imgUrl={Data.imageData.imgUrl}
          alt={Data.imageData.alt}
          imgClass={Data.imageData.imgClass}
        />
      )}

      {component === 'PageTitle' && <PageTitle pageTitle={Data.textData.pageTitle} pageTitleClass = {Data.textData.pageTitleClass} />}

      {component === 'CardGroup' && (
        <CardGroup cards={Data.cardGroupData.cards} />
      )}

      {component === 'Footnote' && (
        <Footnote
          footnote={Data.textData.footnote}
          footnoteClass={Data.textData.footnoteClass}
        />
      )}
      {component === 'Form' && (
        <Form
          formClass={Data.formData.formClass}
          titleClass={Data.formData.titleClass}
          labelClass={Data.formData.labelClass}
          inputClass={Data.formData.inputClass}
          btnClass={Data.formData.btnClass}
          formTitle={Data.formData.formTitle}
          txt={Data.formData.txt}
          fields={Data.formData.fields}
        />
      )}
      {component === 'Icon' && (
        <Icons icon={singleIcon.icon} iconClass={singleIcon.className} />
      )}
      {component === 'IconGroup' && (
        <IconGroup
          iconsContainerClass={Data.iconsData.iconsContainerClass}
          iconClass={Data.iconsData.iconClass}
          iconList={Data.iconsData.iconList}
        />
      )}

      {component === 'MediaPlayerGroup' && (
        <MediaPlayerGroup
          mediaPlayerTitle={Data.mediaPlayerGroupData.mediaPlayerTitle}
          mediaPlayerClass={Data.mediaPlayerGroupData.mediaPlayerClass}
          mediaUrls={Data.mediaPlayerGroupData.mediaUrls}
        />
      )}

      {component === 'ImageGroup' && (
        <ImageGroup
          imageGroupClass={Data.imageGroupData.imageGroupClass}
          images={Data.imageGroupData.images}
        />
      )}

      {component === 'Picker' && (
        <Picker
          pickerClass=""
          pickerType="range"
          btnClass=""
          btnType=""
          inputClass=""
        />
      )}

      {component === 'Button' && (
        <Button btnClass={Data.button.btnClass} txt={Data.button.txt} />
      )}

      {component === 'ButtonGroup' && (
        <ButtonGroup buttons={Data.buttonGroupData.buttons} />
      )}

      {component === 'Hero' && (
        <Hero
          heroClass={Data.heroData.heroClass}
          imgClass={Data.heroData.imgClass}
          heroTxtClass={Data.heroData.heroTxtClass}
          imgUrl={Data.heroData.imgUrl}
          alt={Data.heroData.alt}
          heroTitle={Data.heroData.heroTitle}
          btnClass={Data.heroData.btnClass}
          buttonType={Data.heroData.buttonType}
          submitClass={Data.heroData.submitClass}
          inputType={Data.heroData.inputType}
          inputClass={Data.heroData.inputClass}
        />
      )}
    </div>
  );
};
