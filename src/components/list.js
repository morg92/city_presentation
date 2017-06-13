import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonEnable: true
        };

        this.handleGallery = this.handleGallery.bind(this);
    }

    handleGallery(event) {
        () =>
            event.preventDefault();
            this.props.dispatchGallery(event);
    }

    render() {
        let infoCity;
        if (this.props.infoCity) {
            infoCity = (this.props.infoCity.map((infoSingle, i) =>
                <tr key={'io' + i}>
                    <td>{infoSingle.name}</td>
                    <td><a href={infoSingle.descrizione} target="_blank">Wikipedia</a></td>
                    <td>{infoSingle.anno_fondazione}</td>
                    <td><input type="button" className="buttonList" value="Show" onClick={() => this.handleGallery(infoSingle.cityId)}/></td>
                </tr>
            ));
        }

        return (
            <div className="list">
                <table>
                    <thead className="tHead">
                        <tr key="tu">
                            <th width="15%">Nome</th>
                            <th width="15%">Discover</th>
                            <th width="15%">Foundation</th>
                            <th width="15%"></th>
                        </tr>
                    </thead>
                    <tbody className="tab">
                        {infoCity}
                    </tbody>
                </table>
            </div>
        );
    }
}