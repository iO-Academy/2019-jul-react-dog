import React from 'react'
import Title from '../Title/Title'
import CardContainer from '../CardContainer/CardContainer'

class Page extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <CardContainer />
            </div>
        )
    }
}

export default Page