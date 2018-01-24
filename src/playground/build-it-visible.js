let visibility = false;

const toggleHandler = () => {
    visibility = !visibility;
    renderBuildItApp();
}

const appRoot = document.getElementById('app');

const renderBuildItApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleHandler}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see.</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderBuildItApp();
