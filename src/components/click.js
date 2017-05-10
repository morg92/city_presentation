import React, { Component } from 'react';

export default class Click extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.dispatchList(event);
    }

    render () {
        return (
            <div>
                <button id="click" onClick={this.handleClick} value="Click Me!"></button>
            </div>
        );
    }
}