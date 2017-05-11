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
        this.props.dispatchGallery();  //TODO --
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <p>{}</p>
                        <a href={this.props}>Descrizione</a>
                        <button onClick={this.handleGallery} value="GO!"></button>
                    </li>
                </ul>
            </div>
        );
    }
}