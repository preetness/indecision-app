class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.state = {
      options: ['Go for a walk', 'Watch TV', 'Take a nap']
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
      <AddOption /> 
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
          <button 
            onClick={this.props.handlePickOption}
            disabled={!this.props.hasOptions}
            >
            What should I do?
            </button>
      </div>
    );
  }
}

class Options extends React.Component {
 render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
      }
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option)
    }
  }
  render() {
    return (
     <div>
     <form onSubmit={this.handleAddOption}>
      <input type="text" name="option"/>
      <button>Add Option</button>
     </form>
     </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));