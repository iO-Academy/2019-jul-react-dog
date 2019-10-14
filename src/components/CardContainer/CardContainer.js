import React from 'react';
import Card from "../Card/Card";

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-container">
              <Card breed={} height={} temperament={} />
              <Card breed={} height={} temperament={} />
            </div>
        )
    }
}

export default CardContainer