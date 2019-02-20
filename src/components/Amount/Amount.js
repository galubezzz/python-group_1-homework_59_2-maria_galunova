import React, {PureComponent} from 'react';

class Amount extends PureComponent {

    render() {
        return (
            <input type="number" onChange={this.props.change} min="1" placeholder="1"></input>
        );
    }
}

export default Amount;
