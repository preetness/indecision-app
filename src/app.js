console.log('App.js is running!');

const appTitles = {
  title: 'Indecision App',
  subTitle: 'What do you want to do?',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const userOption = e.target.elements.option.value;

  if (userOption) {
    appTitles.options.push(userOption);
    e.target.elements.option.value = '';
    renderFormApp();
  }
};

const removeOptions = () => {
  appTitles.options = [];
  renderFormApp();
};

const appRoot = document.getElementById('app');

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{appTitles.title}</h1>
      {appTitles.subTitle && <p>{appTitles.subTitle}</p>}
      <p>{appTitles.options.length > 0 ? 'Here are your options:' : 'No options.'}
      <p>{appTitles.options.length}</p>
        <ol>
          <li>{appTitles.options[0]}</li>
          <li>{appTitles.options[1]}</li> 
          <li>{appTitles.options[2]}</li>      
        </ol>
      </p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        <button onClick={removeOptions}>Remove All</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot);
}

renderFormApp();