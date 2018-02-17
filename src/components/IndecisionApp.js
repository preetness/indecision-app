import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

    state = {
      options: [],
      selectedOption: undefined
    };

    handleDeleteOptions = () => {
      this.setState( () => ({ options: [] }) );
    }
    
    handleDeleteOneOption = (optionToRemove) => {
      this.setState( (prevState) => ({
        options: prevState.options.filter( (option) => optionToRemove !== option)
      }));
    }

    handlePickOption = () => {
      const randomNumber = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNumber];
      this.setState( () => ( { selectedOption: option }) );
    }
  
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid option to add item.'
      } else if (this.state.options.indexOf(option) > -1 ) {
        return 'This option already exists.'
      } 

      this.setState( (prevState) => ({ 
        options: prevState.options.concat(option)
      }));
    }

    handleOptionModal = () => {
      this.setState( () => ( { selectedOption: undefined }) );
    }
    
      componentDidMount() {
        try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
      
            if (options) {
                this.setState( () => ({ options }));
            }
            } catch (e) {
        
            }
        }
    
      componentDidUpdate(prevProps,prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);    
        }
      }
    
      componentWillUnmount() {
        console.log('Component will unmount!')
      }
    
      render() {
        const subTitle = 'Put your life in the hands of a computer.';
    
        return (
          <div>
          <Header subtitle={subTitle}/>
          <div className="container">
            <Action 
              hasOptions={this.state.options.length > 0}
              handlePickOption={this.handlePickOption}
            /> 
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOneOption={this.handleDeleteOneOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div> 
          <OptionModal 
            selectedOption={this.state.selectedOption}
            handleOptionModal={this.handleOptionModal}
          />
          </div>
        );
      }
    }