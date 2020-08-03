import React, {Component} from 'react';
import { Card, Container, Row, Col, Button , Modal } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

export class PackageDealSelectionModal extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            

            <Modal  size = "xl"  style={{textAlign: "center", maxWidth: "none", justifyContent: "center"}} >
            <Modal.Body className = "show-grid">
            <Container >
               <Row >
                  <Col className = "ml-1" xs={3} md={5} style={{textAlign: "center" }}>
                    <b>The package you chose</b>
                    <Card className = "mt-3">
                      <Card.Title className = "pl-3 pt-3" style={{textAlign: "left", fontColor: "blue"}}>CARD TITLE</Card.Title>
                      <Card.Img className = "mb-0" variant="top" src="holder.js/398px219?text=Image cap" fluid />
                      <Card.Body className = "mt-0 p-1">
                        <Card className = "mt-0 p-1" >
                          <Row className = "m-0">
                            <Col className = "ml-0" style={{textAlign: "left"}}>
                              <Row>
                                <b>Base sum assured</b>
                              </Row>  
                              <Row>
                                Php
                              </Row>
                            </Col>                 
                            <Col style={{textAlign: "left"}}>
                              <Row>
                                <b>Annual premium</b>
                              </Row> 
                              <Row>
                                Php
                              </Row>                           
                            </Col> 
                          </Row>                      
                          <Col>
                          </Col>
                        </Card>
                      </Card.Body>
                    </Card>
                  </Col>
    
                  <Col className = "my-auto" style={{textAlign: "center", contentAlign: "center", padding: "Auto"}} xs="auto">
    
                    <ArrowRight  color="royalblue" size={76} />
                  </Col>
    
                  <Col className = "mr-1" xs={3} md={5} style={{textAlign: "center" }} >
                    <b>Select a deal</b>
                      <Row>
                      <Card className = "p-2 mt-3" style={{textAlign: "left", width: "100%" }}>
                        <Card.Body>
                          <Card.Title><b>Annually</b></Card.Title>
                          <Card.Text>
                            <b>Php</b>
                          </Card.Text>
                          <Card.Text>
                          Save on the first year for this option
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      </Row>
                      <Row>
                      <Card className="p-2 mt-3" style={{textAlign: "left" , width: "100%" }}>
                      <Card.Body>
                          <Card.Title><b>Semi-Annually</b></Card.Title>
                          <Card.Text>
                            <b>Php</b>
                          </Card.Text>
                          <Card.Text>
                          Save on the first year for this option
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card className="p-2 mt-3" style={{textAlign: "left" , width: "100%" }}>
                      <Card.Body>
                          <Card.Title><b>Quarterly</b></Card.Title>
                          <Card.Text>
                            <b>Php</b>
                          </Card.Text>
                          <Card.Text>
                          Save on the first year for this option
                          </Card.Text>
                        </Card.Body>
                      </Card>                  
                      </Row>
                  </Col>
                </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer style={{justifyContent: "space-between"}}>
              <Button variant="light" class = "text-left" onClick={this.props.onHide}>
                Change Package
              </Button>
              <Button  onClick={()=>{this.handleModal2()}}>
                Proceed
              </Button>
            </Modal.Footer>
          </Modal>   

                 
        )
    }
}