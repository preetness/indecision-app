'use strict';

console.log('App.js is running!');

var appTitles = {
  title: 'Indecision App',
  subTitle: 'What do you want to do?',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var userOption = e.target.elements.option.value;

  if (userOption) {
    appTitles.options.push(userOption);
    e.target.elements.option.value = '';
    renderFormApp();
  }
};

var removeOptions = function removeOptions() {
  appTitles.options = [];
  renderFormApp();
};

var appRoot = document.getElementById('app');

var renderFormApp = function renderFormApp() {
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
        'p',
        null,
        appTitles.options.length
      ),
      React.createElement(
        'ol',
        null,
        appTitles.options.map(function (option) {
          return React.createElement(
            'li',
            { key: '{option}' },
            option
          );
        })
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      ),
      React.createElement(
        'button',
        { onClick: removeOptions },
        'Remove All'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderFormApp();
