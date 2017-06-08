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
        let i = 0;
        console.log('>>>>>>>><',this.props.selectedImages,this.props.selectedInfo);
        if (this.props.selectedImages) {
            selectedImages = <img src={this.props.selectedImages} key={'icon' + i} />;
            ++i;
        }
         if (this.props.selectedInfo) {
            selectedInfo = <p key={'info' + i}>{this.props.selectedInfo}</p>;
        }

        return (
            <div>
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
                        <button className="previous" onClick={() => this.handlePreviousNext('-')}>Previous</button>
                        <button className="next" onClick={() => this.handlePreviousNext('+')}>Next</button>
                    </div>
                </div>
                <div className="descr">
                    {selectedInfo}
                    {console.log(selectedInfo)}
                </div>
            </div>
        );
    }
}