import React, { Component } from 'react';

export default class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: []
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
    }


    handleClickNext(event) {
        this.setState({ img: event.target.img });
    }

    handleClickPrevious(event) {
        this.setState({ img: event.target.img });
    }

    render() {
        return (
            <div className="icon">
                <button className="next" onClick={this.handleClickNext}>Next</button>
                <button className="previous" onClick={this.handleClickPrevious}>Previous</button>
            </div>
        );
    }
}