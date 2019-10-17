import React from 'react'

function Title(props) {
    return (
        <div className="title-container">
            <h1 className="title">{props.titleText}</h1>
            <h2 className="sub-title">{props.subTitle}</h2>
        </div>
    )
}

export default Title
