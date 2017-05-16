import React, { Component } from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };

        this.handleClickToIcon = this.handleClickToIcon.bind(this);
    }

    handleClickToIcon(value) {
        this.props.dispatchToIcon(value);
    }

    render() {
        let immagini;
        if (this.props.immagini) {
            immagini = (this.props.immagini.map((allImg, k) =>
                <div className="insideGallery" key={'divGallery' + k}>
                    <img src={allImg.img[0]} />
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