import React, {Component} from 'react';

class Joke extends Component {

    render() {
        return (
            <div className="m-1">
                {this.props.text}
            </div>
        );
    }
}

export default Joke;
