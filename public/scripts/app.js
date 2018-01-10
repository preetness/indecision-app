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
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
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
  ReactDOM.render(templateThree, appRoot);
};

renderCounterApp();
