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
var user = {
  name: 'Preet Dha',
  age: 40,
  location: 'Seattle'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name.toUpperCase() : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
