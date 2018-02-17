import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
      <div>
        <button
          className="button--link" 
          onClick={props.handleDeleteOptions}
          >
          Remove All Options
        </button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
          props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            handleDeleteOneOption={props.handleDeleteOneOption}
          />
        ))
      }
      </div>
    );
  }

  export default Options;