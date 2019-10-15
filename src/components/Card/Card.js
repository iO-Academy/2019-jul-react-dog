import React from 'react'
import Statistic from "../Statistic/Statistic"

function Card(props) {
        return (
            <div className="card">
                <p><span className="card-key">Breed : </span><span className="card-value">{props.name}</span></p>
                <p><span className="card-key">Height : </span><span className="card-value">{props.height}</span></p>
                <p><span className="card-key">Temperament : </span><span className="card-value">{props.temperament}</span></p>
            </div>
        )
}

export default Card
