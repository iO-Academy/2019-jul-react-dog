import React from 'react'
import Statistic from "../Statistic/Statistic"

class Card extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount() {
        this.setState({dog: ''})
    }


    clickUpdateWin = () => {
        //Matt work here
        // let dogWhoWon = this.props.key
        //Rachmann work here
        fetch('http://localhost:3000/dogs', {
            method: 'put',
            body: JSON.stringify({
                winnerID: 1
            })
        })
            .then(data => data.json())
            .then(json => {
                console.log("hi")
                const state = {...this.state, dog: json}
                this.setState(state)
            })
    }

    render() {
        return (
            <div className="card">
                <Statistic type="Breed" details={this.props.name}/>
                <Statistic type="Height" details={this.props.height}/>
                <Statistic type="Temperament" details={this.props.temperament}/>
                <button onClick={this.clickUpdateWin} className="like-button"><span className="heart-icon">&#10084;</span> Like</button>
            </div>
        )
    }
}

export default Card
