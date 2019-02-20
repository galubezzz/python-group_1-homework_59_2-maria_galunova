import React, {PureComponent} from 'react';

class Amount extends PureComponent {

    render() {
        return (
            <input className="m-1" type="number" onChange={this.props.change} min="1"></input>
        );
    }
}

export default Amount;
