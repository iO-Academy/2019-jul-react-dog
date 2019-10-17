import React from "react"

function Message (props) {
    return (
        <div className="message-container">
            <p className="message">{props.text}</p>
        </div>
    )
}

export default Message
