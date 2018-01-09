'use strict';

console.log('App.js is running!');

var appTitles = {
  title: 'Indecision App',
  subTitle: 'What do you want to do?',
  options: ['Take a shower', 'Do nothing', 'Watch a movie']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appTitles.title
  ),
  appTitles.subTitle && React.createElement(
    'p',
    null,
    appTitles.subTitle
  ),
  React.createElement(
    'p',
    null,
    appTitles.options.length > 0 ? 'Here are your options:' : 'No options.',
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        appTitles.options[0]
      ),
      React.createElement(
        'li',
        null,
        appTitles.options[1]
      ),
      React.createElement(
        'li',
        null,
        appTitles.options[2]
      )
    )
  )
);

var count = 0;

var addOne = function addOne() {
  console.log('clicked');
};
var minusOne = function minusOne() {
  console.log('minusOne');
};
var reset = function reset() {
  console.log('reset');
};

// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//   </div>
// );

var templateThree = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
