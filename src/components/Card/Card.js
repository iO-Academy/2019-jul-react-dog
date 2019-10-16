import React from 'react'
import Statistic from "../Statistic/Statistic"

function Card(props) {
    return (
        <div className="card">
            <Statistic type="Breed" details={props.name}/>
            <Statistic type="Height" details={props.height}/>
            <Statistic type="Temperament" details={props.temperament}/>
            <button className="like-button" onClick={()=>{
                props.clickEvent(props.id)
            }}>
                <span
                className="heart-icon">&#10084;</span> Like
            </button>
        </div>
    )
}

export default Card
