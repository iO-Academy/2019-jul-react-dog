import React from 'react';
import Card from "../Card/Card";

class CardContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dogs: [],
            name: '',
            height: {
                metric: ''
            }
        }
    }

    componentDidMount() {
        this.getDogs()
    }

    getRandomDog = (dataArray) => {
        return dataArray[Math.floor(Math.random() * dataArray.length)];
    }

    getDogs = () => {
        fetch('http://localhost:3000/dogs', {
            method: 'get'
        })
        .then((data) => data.json())
        .then((res) => {
            if(res.success) {
                console.log("Got Data Successfully")
                console.log(res.data)
                return res.data
            } else {
                console.log("Error")
                return res.message
            }
        })
            .then((res) => {
                this.setState({
                    dogs: [this.getRandomDog(res), this.getRandomDog(res)]
                    }

                )
        })
    }


    render() {
        return (
            <div className="card-container">
                {
                    this.state.dogs.map((dog)=>{
                        return <Card name={dog.name} height={dog.height.metric} temperament={dog.temperament} />

                    })
                }
            </div>
        )
    }
}

export default CardContainer