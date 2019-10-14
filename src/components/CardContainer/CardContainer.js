import React from 'react';
import Card from "../Card/Card";

class CardContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            breed: '',
            height: '',
            temperament: ''
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
        .then((res) => this.setState({
            breed: res.data[0].name,
            height: res.data[0].height.metric,
            temperament: res.data[0].temperament
        }))
    }


    render() {
        return (
            <div className="card-container">
              <Card breed={this.state.breed} height={this.state.height} temperament={this.state.temperament} />
              <Card breed={this.state.breed} height={this.state.height} temperament={this.state.temperament} />
            </div>
        )
    }
}

export default CardContainer