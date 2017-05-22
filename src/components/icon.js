import React, { Component } from 'react';

export default class Icon extends Component {
    constructor(props) {
        super(props);

        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrevious(event) {
        event.preventDefault();
        this.props.dispatchToSetButton(event);
    }
    handleNext(event) {
        event.preventDefault();
        this.props.dispatchToSetButton(event);
    }


    render() {

        let view;
        if (this.props.view) {
            view = (this.props.view = (viewImages) =>
                <img src={viewImages.selectedImages} />
            );
        }

        return (
            <div className="icon">
                <div className="insideIcon">
                    {view}
                </div>
                <button className="previous" onClick={this.handlePrevious}>Previous</button>
                <button className="next" onClick={this.handleNext}>Next</button>
            </div>
        );
    }
}