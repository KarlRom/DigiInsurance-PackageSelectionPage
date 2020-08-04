import React, { Component } from 'react'
import PackageCard from './PackageCard'
import { CardDeck, Row } from 'react-bootstrap';

export class PackageSelection extends Component {
    
    state = {
        packages: [
          {
            type: "BASIC",
            basesum:"Php 1,000,000.00",
            annual: "Php 8,831.47"
          },
          {
            type: "STANDARD",
            basesum: "Php 1,500,000.",
            annual: "Php 13,044.15" 
          },
          {
            type: "LITE",
            basesum: "Php 2,000,000.00",
            annual: "Php 17,256.65"
          },
          {
            type: "PRO",
            basesum:"Php 2,500,000.00",
            annual: "Php 21,469.50"
          }

        ]
      };

      render(){
            return(
                <div className="flex-wrap" >
                  <Row>
                 { this.state.packages.map(item => <PackageCard key = {item.type} type ={item.type} basesum = {item.basesum} annual = {item.annual} />  ) }
                  </Row>  
            
                </div>
            )   
      }
}

export default PackageSelection
