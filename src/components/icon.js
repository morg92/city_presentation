import React, { Component } from 'react';

export default class Icon extends Component {
    constructor(props) {
        super(props);

        this.handlePreviousNext = this.handlePreviousNext.bind(this);
    }

    handlePreviousNext(event) { () =>
        event.preventDefault();
        this.props.dispatchToSetButton(event);
    }


    render() {
        let selectedImages;
        let i = 0;
        if (this.props.selectedImages) {
            selectedImages = <img src={this.props.selectedImages} key={'icon' + i}/>;
            ++i;
        }

        return (
            <div className="icon">
                <div className="insideIcon">
                    {selectedImages}
                </div>
                <button className="previous" onClick={() => this.handlePreviousNext(-1)}>Previous</button>
                <button className="next" onClick={() => this.handlePreviousNext(1)}>Next</button>
            </div>
        );
    }
}