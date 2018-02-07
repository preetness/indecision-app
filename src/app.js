class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
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

IndecisionApp.defaultProps = {
  options: []
};

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

const Action = (props) => {
  return (
    <div>
        <button 
          onClick={props.handlePickOption}
          disabled={!props.hasOptions}
          >
          What should I do?
          </button>
    </div>
  );
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

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={ (e) => {
          props.handleDeleteOneOption(props.optionText)
        }}
        >
        Remove
        </button>
    </div>
  );
}


class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined 
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState( () => ({ error }) );

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
     <div>
     {this.state.error && <p>{this.state.error}</p>}
     <form onSubmit={this.handleAddOption}>
      <input type="text" name="option"/>
      <button>Add Option</button>
     </form>
     </div>
    )
  }
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