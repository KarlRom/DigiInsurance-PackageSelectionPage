import React from 'react';
import { Card, Container, Row, Col, Button , ButtonToolbar, Modal } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

import {PackageDealSelectionModal} from './components/PackageDealSelectionModal.js';
import {PackageCard} from './components/PackageCard.js';


class App extends React.Component {
  constructor(){
    super()
    this.state={
        Modalshow: false,
        Modalshow2:false
      };

  }



  Modalclose(){
    this.setState({
      Modalshow:false
    });
  }
  render() {

    return (
    <div className="p-3">
      {/*<h1> Bootstrap Modal in React</h1>*/}
      <Button onClick={()=>{this.setState({Modalshow: true})}}>Package Selection</Button>

      <PackageDealSelectionModal show ={this.state.Modalshow} onHide = {()=>{this.setState({Modalshow: false})}}/>

      <Container fluid>
        <Row xs={2} md={4} lg={6}>
          <Col className = "m-1" >
            <PackageCard />
          </Col>
          <Col className = "m-1" >
            <PackageCard />
          </Col>
          <Col className = "m-1" >
            <PackageCard />
          </Col>   
          <Col className = "m-1" >
            <PackageCard />
          </Col>                      
        </Row>
      </Container>

      <Modal size = "m" className = "p-3" show ={this.state.Modalshow2} flex>
        <Modal.Body className = "mx-3 p-3">
          <Row >
            <h3><b>YOUR BENEFITS</b></h3>
            Quick summary at the benefits you can get from this package
          </Row>
          <Row className = "mt-3">
              <b>SUMMARY OF BENEFITS</b>
          </Row>
          <Row className = "my-3" style={{contentAlign: "Center", justifyContent: "space-between"}}>
            <Row className = "m-0" style={{ width: "100%" }}>
              <Col xs = {6} style={{contentAlign: "Left"}}>
                <Row>
                  <b>POLICY DETAILS</b>
                </Row>
                <Row>
                  Base sum assured
                </Row>
              </Col>
              <Col xs = {6}  style={{contentAlign: "Right"}}>
                <Row>
                  <b>AMOUNT IN PHP</b>
                </Row>
                <Row>
                  1,500,000.00
                </Row>    
              </Col>
            </Row>
          </Row>
        </Modal.Body>
        <Modal.Footer className = "my-auto" style={{textAlign: "center", contentAlign: "center", padding: "Auto"}}  >
          <Button  className = "my-auto" style={{textAlign: "center", contentAlign: "center", padding: "Auto"}}  onClick={()=>this.setState({ showModal2:false, showModal1:false})}>
            PROCEED
          </Button>
        </Modal.Footer>
      </Modal>      
    </div>
    );
  }
}

export default App;
