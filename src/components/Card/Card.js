import React from 'react'
import Statistic from "../Statistic/Statistic"

class Card extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            dogs: [],
            winCount: 0
        }
    }

    clickUpdateWin = () => {
        //Matt work here
        // let dogWhoWon = this.props.key
        //Rachmann work here
        fetch('http://localhost:3000/dogs', {
            method: 'put'
        })
            .then(data => data.json())
            .then(res => {
                console.log(res)
                const state = {...this.state, winCount: this.props.winCount}
                this.setState(state)
                console.log(state.dogs)
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
