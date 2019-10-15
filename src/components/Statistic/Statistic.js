import React from 'react'

const Statistic = (props) => {
    return (
        <p>
            <span className="card-key">{props.type}: </span>
            <span className="card-value">{props.details}</span>
        </p>
    )
}

export default Statistic
