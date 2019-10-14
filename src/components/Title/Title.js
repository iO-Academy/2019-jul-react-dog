import React from 'react'

class Title extends React.Component {
    render(){
        return (
            <div className="title-container">
               <h3>I am the Title</h3>
               <div className="heading-container">
                   <h3>I am the heading</h3>
               </div>
                <h4 className="instruction">Choose your favorite</h4>
            </div>
        )
    }
}

export default Title