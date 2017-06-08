import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Icon extends Component {
    constructor(props) {
        super(props);

        this.handlePreviousNext = this.handlePreviousNext.bind(this);
    }

    handlePreviousNext(event) {
        () =>
            event.preventDefault();
        this.props.dispatchToSetButton(event);
    }


    render() {
        let selectedImages;
        let i = 0;
        if (this.props.selectedImages) {
            selectedImages = <img src={this.props.selectedImages} key={'icon' + i} />;
            ++i;
        }

        return (
            <div className="icon">
                <div className="insideIcon">
                    <CSSTransitionGroup
                        transitionName="gallery"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionAppear={true}
                        transitionAppearTimeout={1000}>
                        {selectedImages}
                    </CSSTransitionGroup>
                </div>
                {/*<div>*/}
                    <button className="previous" onClick={() => this.handlePreviousNext('-')}>Previous</button>
                    <button className="next" onClick={() => this.handlePreviousNext('+')}>Next</button>
                {/*</div>*/}
            </div>
        );
    }
}