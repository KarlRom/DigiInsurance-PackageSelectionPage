import React, { useState } from 'react';
import { Card, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Holder2 from './Holder2'

import { SODModal } from './SummaryOfDealsModal.js';


export const PDSModal = ({ type, basesum, annual, show, handleShow/*, SAnnualP, QuarterP*/ }) => {
  const style = {
    width: 297,
  }

  const deals = {
    fontSize: 15,
    textDecoration: 'underline',
  }

  const dealsPrice = {
    fontSize: 15,
  }

  const dealsDesc = {
    fontSize: 13,
  }


  useState([]);
  const [show2, setShow] = useState(false);

  const handleShow2 = status => {
    setShow(status);
  }

  return (

    <Modal
      size="lg"
      style={{ textAlign: "center", justifyContent: "center" }}
      backdrop="static"
      keyboard={false}
      show={show}
      onHide={() => { handleShow(false) }}
      flex fluid>

      <Modal.Body className="show-grid">
        <Container >
          <Row >
            <Col className="m-1  mt-2" style={{ contentAlign: "center" }}>
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

            <Col className="mx-3 mt-2" style={{ textAlign: "center" }} >
              <b>Select a deal</b>
              <Row>
                <Card className="p-1 mt-3" style={{ textAlign: "left", width: "100%" }}>
                  <Card.Body className="p-2">
                    <Card.Title style={deals}> <b>Annually</b></Card.Title>
                    <Card.Text style={dealsPrice}>
                      <b>Php {annual}</b>
                    </Card.Text>
                    <Card.Text style={dealsDesc}>
                      Save Php 1,236.41 on the first year for this option
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card className="p-1 mt-3" style={{ textAlign: "left", width: "100%" }}>
                  <Card.Body className="p-2">
                    <Card.Title style={deals}><b>Semi-Annually</b></Card.Title>
                    <Card.Text style={dealsPrice}>
                      <b>Php 4,636.52{/*{ SAnnualP }*/}</b>
                    </Card.Text>
                    <Card.Text style={dealsDesc}>
                      Save Php 784.52 on the first year for this option
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card className="p-1 mt-3" style={{ textAlign: "left", width: "100%" }}>
                  <Card.Body className="p-2">
                    <Card.Title style={deals}><b>Quarterly</b></Card.Title>
                    <Card.Text style={dealsPrice}>
                      <b>Php 2,516.97 {/*{ QuarterP }*/}</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="mx-3" style={{ justifyContent: "space-between", borderTopWidth: 0 }}>
        <Button variant="light" class="text-left" onClick={() => { handleShow(false) }} size="md" style={{ backgroundColor: "white", borderRadius: 50, fontSize: 15, color: "grey" }}>
          <b>CHANGE PACKAGE</b>
        </Button>
        <Button onClick={() => { handleShow2(true) }} variant="info" size="md" style={{ backgroundColor: "#005dbe", borderRadius: 50, fontSize: 15 }} >
          <b>PROCEED</b>
        </Button>
        <SODModal show={show}
          show2={show2}
          type={type}
          basesum={basesum}
          annual={annual}
          handleShow={handleShow2} />
      </Modal.Footer>
    </Modal>

  )

}

export default PDSModal;