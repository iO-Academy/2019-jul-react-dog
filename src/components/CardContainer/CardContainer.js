import React from 'react'
import Card from "../Card/Card"
import UniqueRandomArray from "unique-random-array"
import Message from '../Message/Message'

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
                const state = {...this.state, dogs: dogs, randomDog: random}
                this.setState(state)
                }
            )
    }

    clickUpdateWin = (id) => {
        fetch('http://localhost:3000/dogs/' + id + "/wins", {
            method: 'POST'
        })
        console.log('me pressed button')
    }

    refreshDogs = () => {
        let dogs = [this.state.randomDog(), this.state.randomDog()]
        let state = this.state;
        for (let i = 0; i < 11; i++ ) {
            console.log('me check dogs' + i)
            if (i === 10) {
                state = {...this.state, message: 'We are trying to get you some different dogs but we can\'t find any... maybe they are busy frolicking in the fields. Please refresh the page!'}
                console.log('blarp')
            } else {
                if ((dogs[0]._id == this.state.dogs[0]._id || dogs[0]._id == this.state.dogs[1]._id)
                    && (dogs[1]._id == this.state.dogs[0]._id || dogs[1]._id == this.state.dogs[1]._id)) {
                    dogs = [this.state.randomDog(), this.state.randomDog()]
                } else {
                    state = {...this.state, dogs: dogs}
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
                    clickEvent={(id)=>{
                        this.clickUpdateWin(id)
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
