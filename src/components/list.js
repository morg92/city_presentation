import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: ''
        };

        this.handleGallery = this.handleGallery.bind(this);
    }

    handleGallery(event) {
        event.preventDefault();
        this.props.dispatchGallery(event);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <p>{/*this.props.city.name*/}</p>
                        <p>{/*this.ptops.city.anno_fondazione*/}</p>
                        <a href={this.props.city/*.descrizione*/}>Descrizione</a>
                        <button onClick={this.handleGallery} value="GO!"></button>
                    </li>
                </ul>
            </div>
        );
    }
}

/*
var ResultList = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.img.map(function(images) {
                    return <ResultItem result={images} />;
                })}
            </ul>
        );
    }
});

var ResultItem = React.createClass({
    render: function() {
        return (
            <li> return {this.props.images}; </li>
        );
    }
});*/