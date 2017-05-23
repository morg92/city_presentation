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

        let view;
        if (this.props.view) {
            view = (this.props.view.map((viewImages) =>
                <img src={viewImages.selectedImages[0]} />
            ));
        }

        return (
            <div className="icon">
                <div className="insideIcon">
                    {view}
                </div>
                <button className="previous" onClick={() => this.handlePreviousNext(-1)}>Previous</button>
                <button className="next" onClick={() => this.handlePreviousNext(1)}>Next</button>
            </div>
        );
    }
}