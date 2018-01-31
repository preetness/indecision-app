class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleVisibilityToggle() {
        this.setState( () => {
            return {
                visibility: !this.state.visibility
            };
        });
    }
    

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                    <button onClick={this.handleVisibilityToggle}>
                        {this.state.visibility ? 'Hide Details' : 'Show Details'}
                    </button>
                        {this.state.visibility && (
                        <div>
                            <p>Hey. These are some details you can now see.</p>
                        </div>
                    )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
