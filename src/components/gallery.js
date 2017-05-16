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
        let view;
        if (this.props.viewDivImg) {
            view = (this.props.viewDivImg.map((image) => <img src={image} />));
        }
        return (
            <div className="gallery">
                <button className="insideGallery" onClick={this.handleClickToIcon}>
                    {view}
                </button>
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