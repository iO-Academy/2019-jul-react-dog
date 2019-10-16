import React from 'react'

function Statistic(props) {
    return (
        <p>
            <span className="card-key">{props.type}: </span>
            <span className="card-value">{props.details}</span>
        </p>
    )
}

export default Statistic
