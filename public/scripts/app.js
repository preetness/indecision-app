'use strict';

console.log('App.js is running!');

var appTitles = {
  title: 'Indecision App',
  subTitle: 'What do you want to do?',
  optionOne: 'Take a shower',
  optionTwo: 'Go back to sleep'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appTitles.title
  ),
  React.createElement(
    'p',
    null,
    appTitles.subTitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      appTitles.optionOne
    ),
    React.createElement(
      'li',
      null,
      appTitles.optionTwo
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
    return location;
  } else {
    return 'Unknown';
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.location)
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
