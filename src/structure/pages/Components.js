import React, { useState } from 'react';
import components from '../../data/components.json';
import { Renderer } from '../components/Renderer';
import { CodeRenderer } from '../components/CodeRenderer';
import { Button, PageTitle, SectionTitle } from 'neptunes-components';
export const Components = () => {
  const componentList = components.componentList;
  const [activeComponent, setActiveComponent] = useState(0);
  const componentName = componentList[activeComponent].name;
  const componentCategory = componentList[activeComponent].category;
  const componentImage = componentList[activeComponent].componentImage;
  const componentReactCode = componentList[activeComponent].reactCodeImage;
  const componentScssCode = componentList[activeComponent].scssCodeImage;
  const componentPropsList = componentList[activeComponent].propsList;
  const componentExposition = componentList[activeComponent].exposition;

  const updateActiveComponent = (e) => {
    console.log(Object.values(e.target.value))
  }

  return (
    <>
      <PageTitle pageTitle = "Components" pageTitleClass = "components__title" />
      <SectionTitle sectionTitle = "Visit Neptune GUI" sectionTitleClass = "components__title"/>
      </>
  );
};
