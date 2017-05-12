import React, { Component } from 'react';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    }

    render() {
        return (
            <div className="gallery">
                {/*this.props.images.img*/''}
            </div>
        );
    }
}

/*
//--------------------------------------------------------------------------
var ResultGallery = React.createClass({
            render: function () {
                return (
                    <div>
                        {this.props.img.map(function (images) {
                            return <ResultItem result={images} />;
                        })
                        }
                    </div>
                );
            }
        });

        var ResultItem = React.createClass({
            render: function () {
                return (
                    <div> return {this.props.images}; </div>
                );
            }
        });*/