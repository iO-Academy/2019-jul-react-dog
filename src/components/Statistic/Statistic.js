import React from 'react'

class Statistic extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <p><span className="card-key">{this.props.type}: </span><span className="card-value">{this.props.details}</span></p>
    }
}

export default Statistic
