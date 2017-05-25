import React, { Component } from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };

        //this.handleClickToIcon = this.handleClickToIcon.bind(this);
    }
/*
    handleClickToIcon(event) { () =>
        event.preventDefault();
        this.props.dispatchToIcon(event);
    }
*/
    render() {
        let immagini;
        if (this.props.immagini) {
            immagini = (this.props.immagini.map((allImg, k) =>
                <div className="insideGallery" key={'divGallery' + k} /*onClick={() => this.handleClickToIcon(allImg)}*/>
                    <img src={allImg} />
                </div>
            ));
        }
        return (
            <div className="gallery">
                {immagini}
            </div>
        );
    }
}