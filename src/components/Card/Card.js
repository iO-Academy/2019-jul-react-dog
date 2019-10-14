import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <p>Breed : </p> <span></span>
                <p>Height : </p> <span></span>
                <p>Temperament : </p> <span></span>
            </div>
        )
    }
}

export default Card