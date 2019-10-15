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
            .then((data) => data.json())
            .then((res) => {
                if (res.success) {
                    return res.data
                } else {
                    return res.message
                }
            })
            .then((res) => {
                    let random = UniqueRandomArray(res)
                    const state = {...this.state}
                    state.dogs = [random(), random()]
                    this.setState(state)
                }
            )
    }

    render() {

        return (
            <div className="card-container">
                {
                    this.state.dogs.map((dog) => {
                        return <Card name={dog.name} height={dog.height.metric + "cm"} temperament={dog.temperament}/>
                    })
                }
            </div>
        )
    }
}

export default CardContainer
