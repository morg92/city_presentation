import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.handleGallery = this.handleGallery.bind(this);
    }

    handleGallery(event) {
        event.preventDefault();
        this.props.dispatchGallery(event);
    }

    render() {

        let infoCity;
        if (this.props.infoCity) {
            infoCity = (this.props.infoCity.map((infoSingle, i) =>
                <tr key={'io' + i}>
                    <td>{infoSingle.name}</td>
                    <td><a href={infoSingle.descrizione}>Wika</a></td>
                    <td>{infoSingle.anno_fondazione}</td>
                </tr>
            ));
        }

        return (
            <div className="list">
                <table>
                    <thead>
                        <tr key="tu">
                            <th>Nome</th>
                            <th>Discover</th>
                            <th colSpan="3">Foundation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {infoCity}

                    </tbody>
                </table>
            </div>
        );
    }
}