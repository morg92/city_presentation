import React, { Component } from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    }

    render() {
        let immagini;
        if (this.props.immagini) {
            immagini = (this.props.immagini.map((allImg, k) =>
                <div className="insideGallery" key={'divGallery' + k}>
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