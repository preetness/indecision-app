'use strict';

var visibility = false;

var toggleHandler = function toggleHandler() {
    visibility = !visibility;
    renderBuildItApp();
};

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
            { onClick: toggleHandler },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey. These are some details you can now see.'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderBuildItApp();
