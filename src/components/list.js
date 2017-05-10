import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        /*this.state = {             //popolare la lista con JSON
            img: [json]
        }*/

        this.handleGallery = this.handleGallery.bind(this);
    }

    handleGallery(event) {
        event.preventDefault();
        this.props.dispatchGallery(this.props.ui.img.images.img);  //TODO --
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <p>{this.props.ui.img.images.name}</p>
                        <a href={this.props.ui.img.images.descrizione}>Descrizione</a>
                        <button onClick={this.handleGallery} value="GO!"></button>
                    </li>
                </ul>
            </div>
        );
    }
}