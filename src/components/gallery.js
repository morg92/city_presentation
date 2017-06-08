import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
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
        if (this.props.immagini) {
            immagini = (this.props.immagini.map((allImg, k) =>
                <div className="insideGallery" key={'divGallery' + k} onClick={() => this.handleIcon(k)}>
                    <img src={allImg} />
                    {/*<p>{k}</p>*/}
                </div>
            ));
        }
        return (
            <div className="gallery">
                <CSSTransitionGroup
                    transitionName="gallery"
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}>
                    {immagini}
                </CSSTransitionGroup>
            </div>
        );
    }
}