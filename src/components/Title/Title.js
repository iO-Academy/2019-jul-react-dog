import React from 'react'

function Title(props) {
    return (
        <div className="title-container">
            <h1 className="Title">{props.titleText}</h1>
            <h2 className="instruction">{props.instruction}</h2>
        </div>
    )
}

export default Title
