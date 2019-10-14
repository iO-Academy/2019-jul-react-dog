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
        let allDogs = this.getDogs()
        let twoRandomDogs = this.shuffleDogsArrayPickTwo(allDogs)
        this.setState({
            dogs: twoRandomDogs
        })
    }

    getRandomDog = (dataArray) => {
        return dataArray[Math.floor(Math.random() * dataArray.length)];
    }

    shuffleDogsArrayPickTwo = (dataArray) => {
        let dog1 = this.getRandomDog(dataArray)
        let dog2 = this.getRandomDog(dataArray)

        while(dog1.id == dog2.id) {
            dog2 = this.getRandomDog(dataArray)
        }
        return [dog1, dog2]
    }

    getDogs = () => {
        fetch('http://localhost:3000/dogs', {
            method: 'get'
        })
        .then((data) => data.json())
        .then((res) => {
            if(res.success) {
                //console.log("Got Data Successfully")
                //console.log(res.data)
                return res.data
            } else {
                //console.log("Error")
                return res.message
            }
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