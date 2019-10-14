import React from 'react'

class Title extends React.Component {
    render(){
        return (
            <div className="title-container">
               <h1>I am the Title</h1>
               <div className="heading-container">
                   <h2>I am the heading</h2>
               </div>
                <h3 className="instruction">Choose your favorite</h3>
            </div>
        )
    }
}

export default Title