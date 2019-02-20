import React, {Component} from 'react';

class Joke extends Component {

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default Joke;
