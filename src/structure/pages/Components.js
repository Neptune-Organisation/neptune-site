import React, { useState } from 'react';
import components from '../../data/components.json';
import { Renderer } from '../components/Renderer';

export const Components = () => {
  const componentList = components.componentList;
  const [activeComponent, setActiveComponent] = useState(0);
  /* console.log(componentList[activeComponent]); */
  const componentName = componentList[activeComponent].name;
  const componentCategory = componentList[activeComponent].category;
  const componentImage = componentList[activeComponent].componentImage;
  const componentReactCode = componentList[activeComponent].reactCodeImage;
  const componentScssCode = componentList[activeComponent].scssCodeImage;
  const componentPropsList = componentList[activeComponent].propsList;
  const componentExposition = componentList[activeComponent].exposition;

  return (
    <div className="components">
      <div className="components__sidebar">
        <h2>Components</h2>
        <menu className='components__sidebar-list'>
          {componentList.map((component) => (
            <>
              <p
                onClick={() =>
                  setActiveComponent(componentList.indexOf(component))
                }
              >
                {`< ${component.name} />`}
              </p>
            </>
          ))}
        </menu>
      </div>
      <div className="components__main-display">
        <h2>{componentName}</h2>
        <p>{componentCategory}</p>
        <p>{componentImage}</p>
        <Renderer component = {componentName} />
        <p>{componentReactCode}</p>
        <p>{componentScssCode}</p>
        {componentExposition && <p>{componentExposition}</p>}
        {componentPropsList &&
          componentPropsList.map(component => (
              <>
                <p>{component.name}</p>
                <p>{component.required}</p>
              </>
          ) )}
      </div>
    </div>
  );
};
