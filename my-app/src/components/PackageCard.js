import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Holder2 from './Holder2'
import './Package-Selection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const PackageCard = ({type, basesum, annual}) => {
    const style ={
        width: 297,
    }

    return(
      

        <Card border = "light" className = "flex-wrap justify-content-center m-2" style ={style}>
            <Card.Body className = "pb-2 pt-2">
            <Card.Text className = "ml-1">
                <span className = "row package pb-1">{type} </span>
                <span className = "row align-items-center">
                    <FontAwesomeIcon icon = {faHeart} size= "lg" style = {{color: "#e72614"}} />
                   <span className = "col ml-2">
                        <span className = "row insurance">HMO </span>
                        <span className = " row type">Health</span>
                   </span>
                    
                </span>
            </Card.Text>
            </Card.Body>

            <Card.Body className="p-0">
                <Holder2 />
            </Card.Body>

            <Card.Body className = "pt-2">
                <span className = "row">
                    <span className = "col">
                        <span className = " row insurance">Base sum assured</span>
                        <span className = "row">
                            <FontAwesomeIcon icon = {faCheckCircle} size = "sm" style = {{color:"#005dbe"}} />
                            <span className = "type pl-1">{basesum}</span> 
                        </span>
                    </span>

                    <span className = "col">
                        <span className = "row d-flex justify-content-end insurance">Annual Premium</span>
                        <span className = "row d-flex justify-content-end">
                            <FontAwesomeIcon icon = {faCheckCircle} size = "sm" style = {{color: "#005dbe"}} />
                            <span className = "type pl-1">{annual}</span> 
                        </span>
                    </span>
                </span>

                <span className = "row d-flex justify-content-center pt-3">
                <Button variant = "info" size = "sm" style = {{backgroundColor: "#005dbe", borderRadius: 50,  fontSize: 11}}>I CHOOSE THIS PACKAGE</Button>
                </span>
            </Card.Body>
        </Card>
    )
}

export default PackageCard