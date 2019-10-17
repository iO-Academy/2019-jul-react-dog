import React from 'react'
import Card from "../Card/Card"
import UniqueRandomArray from "unique-random-array"

class CardContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dogs: []
        }
    }

    componentDidMount() {
        this.getDogs()
    }

    getDogs = () => {
        fetch('http://localhost:3000/dogs', {
            method: 'get'
        })
            .then(data => data.json())
            .then(res => {
                if (res.success) {
                    return res.data
                } else {
                    return res.message
                }
            })
            .then(res => {
                    let random = UniqueRandomArray(res)
                    let dogs = [random(), random()]
                    const state = {...this.state, dogs: dogs, getRandomDog: random}
                    this.setState(state)
                }
            )
    }

    sendWinToDb = id => {
        fetch('http://localhost:3000/dogs/' + id + "/win", {
            method: 'POST'
        })
    }

    refreshDogs = () => {
        let newDogs = [this.state.getRandomDog(), this.state.getRandomDog()]
        while ((newDogs[0]._id == this.state.dogs[0]._id || newDogs[0]._id == this.state.dogs[1]._id)
        && (newDogs[1]._id == this.state.dogs[0]._id || newDogs[1]._id == this.state.dogs[1]._id)) {
            newDogs = [this.state.getRandomDog(), this.state.getRandomDog()]
        }
        const state = {...this.state, dogs: newDogs}
        this.setState(state)
    }

    render() {
        return (
            <div className="card-container">
                {
                    this.state.dogs.map(dog => {
                        return <Card
                            key={dog.id}
                            name={dog.name}
                            height={dog.height.metric + "cm"}
                            temperament={dog.temperament}
                            id={dog._id}
                            selectWinner={id => {
                                this.sendWinToDb(id)
                                this.refreshDogs()
                            }}/>
                    })
                }
            </div>
        )
    }
}

export default CardContainer
