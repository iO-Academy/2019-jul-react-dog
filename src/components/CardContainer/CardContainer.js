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
                const state = {...this.state, dogs: dogs}
                this.setState(state)
                }
            )
    }

    clickUpdateWin = () => {
        //Matt work here
        document.getElementsByClassName("like-button").addEventListener("click", );
        //Rachmann work here
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
                            id={dog._id}/>
                    })
                }
            </div>
        )
    }
}

export default CardContainer
