import React from 'react'
import Statistic from "../Statistic/Statistic"

class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card">
                <Statistic type="Breed" details={this.props.name}/>
                <Statistic type="Height" details={this.props.height}/>
                <Statistic type="Temperament" details={this.props.temperament}/>
            </div>
        )
    }
}

export default Card
