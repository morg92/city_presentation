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
        let selectedInfo;
        let cityName;
        let i;
        if (this.props.selectedImages) {
            selectedImages = <img src={this.props.selectedImages} key={'icon' + i} />;
            ++i;
        }
        if (this.props.selectedInfo) {
            selectedInfo = <p>{this.props.selectedInfo}</p>;
        }
        if (this.props.cityName) {
            cityName = <p>{this.props.cityName}</p>;
        }

        return (
            <div>
                <div className="cityName">{cityName}</div>
                <div className="icon">
                    <CSSTransitionGroup
                        transitionName="traslate"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionAppear={true}
                        transitionAppearTimeout={1000}>
                        {selectedImages}
                    </CSSTransitionGroup>
                    <div className="insideIcon">
                        <button className="previous" onClick={() => this.handlePreviousNext('-')}>&#8249;</button>
                        <button className="next" onClick={() => this.handlePreviousNext('+')}>&#8250;</button>
                    </div>
                </div>
                <div className="descr">
                    {selectedInfo}
                </div>
            </div>
        );
    }
}