import React, { Component } from 'react'

export default class Holder2 extends Component {
    render() {

        const style ={
            backgroundColor:  '#d3d3d3', 
            height: 200, 
            width: 297 
        }

        const holderStyle ={
            color: 'grey', 
            fontSize: 40
        }
        return (
            <div className = "d-flex flex-wrap justify-content-center align-items-center"style = {style}>
                <p className = "justify-content-center align-items-center" style = {holderStyle}> {style.width} x {style.height} </p>
            </div>
        )
    
    }
}
