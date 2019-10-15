import React from 'react'
import Title from "../Title/Title"
import CardContainer from '../CardContainer/CardContainer'

function Page() {
    return (
        <div>
            <Title titleText="Hot Dog" instruction="Choose your favorite"/>
            <CardContainer/>
        </div>
    )
}

export default Page
