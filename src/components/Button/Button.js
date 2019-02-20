import React, {PureComponent} from 'react';

class Button extends PureComponent {

    render() {
        return (
            <button className="m-1" onClick={()=>{this.props.new(this.props.amount)}}>More</button>
        );
    }
}

export default Button;
