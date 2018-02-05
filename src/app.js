class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState( () => {
      return {
        options: []
      };
    });
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

    this.setState( (prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer.';

    return (
      <div>
      <Header title={title} subtitle={subTitle}/>
      <Action 
        hasOptions={this.state.options.length > 0}
        handlePickOption={this.handlePickOption}
      /> 
      <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
      />
      <AddOption 
        handleAddOption={this.handleAddOption}
      /> 
      </div>
    )
  }
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
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
      {
        props.options.map((option) => <Option key={option} optionText={option}/>)
    }
      <Option />
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
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

    this.setState( () => {
      return { error };
    })
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