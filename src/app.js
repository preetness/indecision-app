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

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random() * appTitles.options.length);
  const pickOption = appTitles.options[randomNumber];
  console.log(pickOption);
};

const appRoot = document.getElementById('app');

const renderFormApp = () => {
  const template = (
    <div>
      <h1>{appTitles.title}</h1>
      {appTitles.subTitle && <p>{appTitles.subTitle}</p>}
      <p>{appTitles.options.length > 0 ? 'Here are your options:' : 'No options.'}
        <ol>
          {
            appTitles.options.map((option) => {
              return <li key="{option}">{option}</li>;
            })
          }      
        </ol>
      </p>
      <button disabled={appTitles.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
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