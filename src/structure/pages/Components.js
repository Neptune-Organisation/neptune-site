import React, { useState } from 'react';
import components from '../../data/components.json';
import { Renderer } from '../components/Renderer';
import { CodeRenderer } from '../components/CodeRenderer';
import { Button } from 'neptunes-components';
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
    <div className="components">
      <div className="components__sidebar">
        <h2 className='components__sidebar-title'>Components</h2>
        <a href="" className='link'>LINK TEST</a>
        <menu className="components__sidebar-list">
          <>
            {componentList.map((component) => (
              <>
                <p
                  onClick={() =>
                    setActiveComponent(componentList.indexOf(component))
                  }
                className="components__sidebar-singleComponent" >
                  {`< ${component.name} />`}
                </p>
              </>
            ))}
          </>
        </menu>
      </div>
      <div className="components__main-display">
        {/* <div className="components__dropdown">
          <select name="" id="" onChange = {e => updateActiveComponent(e)}>
            {componentList.map((component) => (
              <option value={component}>
                {component.name}
              </option>
            ))}
          </select>
        </div> */}
        <h2 className='components__main-displayTitle'>{`<${componentName} />`}</h2>
        <p>{componentImage}</p>
        <Renderer component={componentName} />
        {/* <CodeRenderer activeComponent={componentList[activeComponent]} /> */}

        {componentExposition && <p>{componentExposition}</p>}
        {componentPropsList &&
          componentPropsList.map((component) => (
            <>
              <p>{component.name}</p>
              <p>{component.required}</p>
            </>
          ))}
      </div>
    </div>
  );
};
