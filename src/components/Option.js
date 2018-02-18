import React from 'react'; 

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button 
          className="button button--link "
          onClick={ (e) => {
            props.handleDeleteOneOption(props.optionText)
          }}
          >
          Remove
          </button>
      </div>
    );
  }

  export default Option;