import React, {PureComponent} from 'react';

class Button extends PureComponent {

    render() {
        return (
            <button onClick={this.props.new}>Новая шутка</button>
        );
    }
}

export default Button;
