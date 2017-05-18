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
                <button className="insideGallery" key={'divGallery' + k} onClick={this.handleClickToIcon}>
                    <img src=/*{allImg.img[0]}*/{allImg} />
                </button>
            ));
        }
        return (
            <div className="gallery">
                {immagini}
            </div>
        );
    }
}