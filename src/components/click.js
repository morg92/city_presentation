import React, { Component } from 'react';

export default class Click extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatchList(event); 
    }

    render () {
        return (
            <div>
                <button className="click" onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}