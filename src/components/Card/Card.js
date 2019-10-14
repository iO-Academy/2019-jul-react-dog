import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <p><span className="card-key">Breed : </span><span className="card-value">{this.props.breed}</span></p>
                <p><span className="card-key">Height : </span><span className="card-value">{this.props.height}</span></p>
                <p><span className="card-key">Temperament : </span><span className="card-value">{this.props.temperament}</span></p>
            </div>
        )
    }
}

export default Card