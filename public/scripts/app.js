'use strict';

var appRoot = document.getElementById('app');

var renderBuildItApp = function renderBuildItApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            null,
            'Show Details'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderBuildItApp();
