import React, { Component } from 'react';

export default class Icon extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(num) {
        this.props.dispatchToSetButton(num);
    }


    render() {

        let view;
        if (this.props.view) {
            view = (this.props.view.map((selectedImages) =>
                <img src={selectedImages} />
            ));
        }

        return (
            <div className="icon">
                <div className="insideIcon">
                    {view}
                </div>
                <button className="previous" onClick={this.handleClick(-1)}>Previous</button>
                <button className="next" onClick={this.handleClick(1)}>Next</button>
            </div>
        );
    }
}