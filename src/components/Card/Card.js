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
                <button className="like-button" onClick={()=>{
                    this.props.clickEvent(this.props.id)
                }}>
                    <span
                    className="heart-icon">&#10084;</span> Like
                </button>
            </div>
        )
    }
}

export default Card
