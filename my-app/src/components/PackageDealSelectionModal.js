import React, { Component } from 'react';
import { Card, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { PackageCard } from './PackageCard.js';
import { faHeart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Holder2 from './Holder2'

export const PDSModal = ({ type, basesum, annual, show, handleShow/*, AnnualP, SAnnualP, QuarterP*/ }) => {
  const style = {
    width: 297,
  }


  return (

    <Modal 
      size="lg"
      style={{ textAlign: "center", justifyContent: "center" }}
      backdrop="static"
      keyboard={false}
      open={ show }
      onClose={ () => { handleShow(false) } }>

      <Modal.Body className="show-grid">
        <Container >
          <Row >
            <Col className="m-1" style={{ contentAlign: "center" }}>
              <b>The package you chose</b>

              <Card border="light" className="flex-wrap justify-content-center m-2" style={style}>
                <Card.Body className="pb-2 pt-2">
                  <Card.Text className="ml-1">
                    <span className="row package pb-1">{type} </span>
                    <span className="row align-items-center">
                      <FontAwesomeIcon icon={faHeart} size="lg" style={{ color: "#e72614" }} />
                      <span className="col ml-2">
                        <span className="row insurance">HMO </span>
                        <span className=" row type">Health</span>
                      </span>

                    </span>
                  </Card.Text>
                </Card.Body>

                <Card.Body className="p-0">
                  <Holder2 />
                </Card.Body>

                <Card.Body className="pt-2">
                  <span className="row">
                    <span className="col">
                      <span className=" row insurance">Base sum assured</span>
                      <span className="row">
                        <FontAwesomeIcon icon={faCheckCircle} size="sm" style={{ color: "#005dbe" }} />
                        <span className="type pl-1">{basesum}</span>
                      </span>
                    </span>

                    <span className="col">
                      <span className="row d-flex justify-content-end insurance">Annual Premium</span>
                      <span className="row d-flex justify-content-end">
                        <FontAwesomeIcon icon={faCheckCircle} size="sm" style={{ color: "#005dbe" }} />
                        <span className="type pl-1">{annual}</span>
                      </span>
                    </span>
                  </span>

                </Card.Body>
              </Card>
            </Col>

            <Col className="my-auto" style={{ fontSize: "48px", textAlign: "center", contentAlign: "center", padding: "Auto" }} xs="auto">
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>

            </Col>

            <Col className="m-1" style={{ textAlign: "center" }} >
              <b>Select a deal</b>
              <Row>
                <Card className="p-2 mt-3" style={{ textAlign: "left", width: "100%" }}>
                  <Card.Body>
                    <Card.Title><b>Annually</b></Card.Title>
                    <Card.Text>
                      <b>Php {/*{ AnnualP }*/}</b>
                    </Card.Text>
                    <Card.Text>
                      Save on the first year for this option
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card className="p-2 mt-3" style={{ textAlign: "left", width: "100%" }}>
                  <Card.Body>
                    <Card.Title><b>Semi-Annually</b></Card.Title>
                    <Card.Text>
                      <b>Php {/*{ SAnnualP }*/}</b>
                    </Card.Text>
                    <Card.Text>
                      Save on the first year for this option
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card className="p-2 mt-3" style={{ textAlign: "left", width: "100%" }}>
                  <Card.Body>
                    <Card.Title><b>Quarterly</b></Card.Title>
                    <Card.Text>
                      <b>Php {/*{ QuarterP }*/}</b>
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
      <Modal.Footer style={{ justifyContent: "space-between" }}>
        <Button variant="light" class="text-left" onClick ={ () => { handleShow(false) }} >
          Change Package
          </Button>
        <Button >
          Proceed
          </Button>
      </Modal.Footer>
    </Modal>

  )

}

export default PDSModal;