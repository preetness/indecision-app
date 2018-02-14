import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Action from './components/Action';

class IndecisionApp extends React.Component {
    
      constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
          options: []
        }
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
    
      handleDeleteOptions() {
        this.setState( () => ({ options: [] }) );
      }
    
      handleDeleteOneOption(optionToRemove) {
        this.setState( (prevState) => ({
          options: prevState.options.filter( (option) => optionToRemove !== option)
        }));
      }
    
      handlePickOption() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
      }
    
      handleAddOption(option) {
        if (!option) {
          return 'Enter valid option to add item.'
        } else if (this.state.options.indexOf(option) > -1 ) {
          return 'This option already exists.'
        } 
    
        this.setState( (prevState) => ({ 
          options: prevState.options.concat(option)
        }));
      }
    
      render() {
        const subTitle = 'Put your life in the hands of a computer.';
    
        return (
          <div>
          <Header subtitle={subTitle}/>
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
        );
      }
    }
    
    const Header = (props) => {
      return(
        <div>
          <h1>{props.title}</h1>
          {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
      );
    }
    
    Header.defaultProps = {
      title: 'INDECISION'
    }
    
    const Options = (props) => {
      return (
        <div>
          <button onClick={props.handleDeleteOptions}>Remove All Options</button>
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
    
    const User = () => {
      return (
        <div>
          <p>Name: </p>
          <p>Age: </p>
        </div>
      )
    };
    
    ReactDOM.render(<IndecisionApp />, document.getElementById('app'));