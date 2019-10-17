import React from 'react'
import Card from "../Card/Card"
import UniqueRandomArray from "unique-random-array"
import Message from '../Message/Message'

const fetchUrl = 'http://localhost:3000/dogs/'

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
        fetch(fetchUrl, {
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
                    let getRandomDog = UniqueRandomArray(res)
                    let dogs = [getRandomDog(), getRandomDog()]
                    const state = {...this.state, dogs: dogs, getRandomDog: getRandomDog}
                    this.setState(state)
                }
            )
    }

    sendWinToDb = id => {
        fetch(fetchUrl + id + "/wins", {
            method: 'POST'
        })
    }

    refreshDogs = () => {
        let newDogs = [this.state.getRandomDog(), this.state.getRandomDog()]
        let state = this.state;
        for (let i = 0; i < 11; i++ ) {
            if (i === 10) {
                state = {...this.state, message: 'We are trying to get you some different dogs but we can\'t find any... maybe they are busy frolicking in the fields. Please refresh the page!'}
            } else {
                if ((newDogs[0]._id == this.state.dogs[0]._id || newDogs[0]._id == this.state.dogs[1]._id)
                    && (newDogs[1]._id == this.state.dogs[0]._id || newDogs[1]._id == this.state.dogs[1]._id)) {
                    newDogs = [this.state.getRandomDog(), this.state.getRandomDog()]
                } else {
                    state = {...this.state, dogs: newDogs}
                    break
                }
            }
        }
        this.setState(state)
    }

    render() {
        let output = ''
        if (this.state.message) {
            output = <Message text={this.state.message}/>
        }
        else {
            output = this.state.dogs.map(dog => {
                return <Card
                    key={dog.id}
                    name={dog.name}
                    height={dog.height.metric + "cm"}
                    temperament={dog.temperament}
                    id={dog._id}
                    selectWinner={(id)=>{
                        this.sendWinToDb(id)
                        this.refreshDogs()}}/>
            })
        }
        return (
            <div className="card-container">
                {output}
            </div>
        )
    }
}

export default CardContainer
