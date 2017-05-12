import React, { Component } from 'react';

export default class Icon extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            img: []
        };*/

       /* this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this); */

        this.handleClick = this.handleClick.bind(this);           //modifiche 15:45
    }

/*
    handleClickNext(event) {
        this.setState({ img: event.target.img });
    }

    handleClickPrevious(event) {
        this.setState({ img: event.target.img });
    }
*/
    handleClick() {                                             //modifiche 15:45
        this.props.dispatchToSetButton();
    }
                                                          //modifiche onClick
    render() {
        return (
            <div className="icon">
                <button className="previous" onClick={this.handleClick}>Previous</button>       
                <button className="next" onClick={this.handleClick}>Next</button>
            </div>
        );
    }
}