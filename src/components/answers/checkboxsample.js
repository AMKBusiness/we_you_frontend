import * as React from "react";

class HelloWorldApp extends React.Component {
    state = {
        selected: 'radio-1'
    };

    componentDidUpdate() {
        alert(document.querySelector('input[name=myRadio]:checked').value);
    }

    render() {
        return (
            <div>
                <input type='radio' id='radio-1' name='myRadio' value='radio-1'
                       checked={this.state.selected === 'radio-1'}
                       onChange={(e) => this.setState({selected: e.target.value})}/>
                <br/>
                <input type='radio' id='radio-2' name='myRadio' value='radio-2'
                       checked={this.state.selected === 'radio-2'}
                       onChange={(e) => this.setState({selected: e.target.value})}/>
            </div>
        );
    }
};

var element = document.getElementById('content');

ReactDOM.render(<HelloWorldApp/>, element);