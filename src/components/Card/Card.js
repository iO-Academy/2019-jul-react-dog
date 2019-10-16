import React from 'react'
import Statistic from "../Statistic/Statistic"

function Card(props) {
    return (
        <div className="card">
            <Statistic type="Breed" details={props.name}/>
            <Statistic type="Height" details={props.height}/>
            <Statistic type="Temperament" details={props.temperament}/>
        </div>
    )
}

export default Card
