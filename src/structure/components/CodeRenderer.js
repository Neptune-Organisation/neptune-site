import React, { useState } from 'react';
import components from '../../data/components.json';

export const CodeRenderer = ({ activeComponent }) => {
  const componentList = components.componentList;

  const componentReactCode = activeComponent.reactCodeImage;
  const componentScssCode = activeComponent.scssCodeImage;
  const [showCode, setShowCode] = useState('');
  return (
    <div className="code-renderer">
      <div className="code-renderer__buttons">
        <button
          onClick={() => setShowCode('react')}
          className="code-renderer__btn"
        >
          React Code
        </button>
        <button
          onClick={() => setShowCode('scss')}
          className="code-renderer__btn"
        >
          SCSS Code
        </button>
      </div>
      {showCode === 'react' && <img src={componentReactCode} alt="" className='code-image' />}
      {showCode === 'scss' && <img src={componentScssCode} alt="" className='code-image' />}
    </div>
  );
};
