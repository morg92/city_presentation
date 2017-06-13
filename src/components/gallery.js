import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            selectedInfo: '',
            selected: ''
        };

        this.handleIcon = this.handleIcon.bind(this);
    }

    handleIcon(event) {
        () =>
            event.preventDefault();
        this.props.dispatchIcon(event);
    }


    render() {
        let immagini;
        let selectedInfo;
        let infoImg;
        if (this.props.immagini) {
            immagini = (this.props.immagini.map((allImg, k) =>
                <div className="insideGallery" key={'divGallery' + k} onClick={() => this.handleIcon(k)}>
                    <img src={allImg} />
                    {/*{selected ? <p>{this.props.selectedInfo}</p> : null}*/}
                </div>
            ));
        }
        if (this.props.infoImg) {
            infoImg = (this.props.infoImg.map((allInfo, k) =>
                <div className="infoInsideGallery" key={'pInfo' + k}>
                    <p>{allInfo}</p>
                </div>
            ));
        }
        if (this.props.selectedInfo) {
            selectedInfo = <p>{this.props.selectedInfo}</p>;
        }
        return (
            <div>
                <div className="descr">
                    <CSSTransitionGroup
                        transitionName="gallery"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}>
                        {selectedInfo}
                    </CSSTransitionGroup>
                </div>
                <div className="galleryView">
                    <CSSTransitionGroup
                        transitionName="gallery"
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}>
                        {immagini}
                        <div>
                            {infoImg}
                        </div>
                    </CSSTransitionGroup>
                </div>
            </div>
        );
    }
}