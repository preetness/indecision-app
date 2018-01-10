console.log('App.js is running!');

const appTitles = {
  title: 'Indecision App',
  subTitle: 'What do you want to do?',
  options: ['Take a shower', 'Do nothing', 'Watch a movie']
};

const template = (
  <div>
    <h1>{appTitles.title}</h1>
    {appTitles.subTitle && <p>{appTitles.subTitle}</p>}
    <p>{appTitles.options.length > 0 ? 'Here are your options:' : 'No options.'}
      <ol>
        <li>{appTitles.options[0]}</li>
        <li>{appTitles.options[1]}</li> 
        <li>{appTitles.options[2]}</li>      
      </ol>
    </p>

  </div>
)

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateThree = (
    <div>
      <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>    
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>      
    </div>
  )
  ReactDOM.render(templateThree, appRoot); 
};

renderCounterApp();