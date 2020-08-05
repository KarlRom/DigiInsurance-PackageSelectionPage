import React, { useState } from 'react';
import { Card, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Holder2 from './Holder2'

export const SODModal = ({ type, basesum, annual, show, show2, handleShow/*, AnnualP, SAnnualP, QuarterP*/ }) => {

    const style = {
        fontSize: 18,
    }
    
    return (

        <Modal
            size="m"
            className="p-3"
            style={{ textAlign: "center", justifyContent: "center", borderRadius: 90 }}
            backdrop="static"
            keyboard={false}
            show={show2}
            onHide={() => { handleShow(false) }}>
            <Modal.Body className="mx-3 p-3">
                <Row >
                    <b style={style}>YOUR BENEFITS</b>
            Quick summary at the benefits you can get from this package
          </Row>
                <Row className="mt-3">
                    <b>SUMMARY OF BENEFITS</b>
                </Row>
                <Row className="my-3" style={{ contentAlign: "Center", justifyContent: "space-between" }}>
                    <Row className="m-0" style={{ width: "100%" }}>
                        <Col xs={6} style={{ contentAlign: "Left" }}>
                            <Row>
                                <b>POLICY DETAILS</b>
                            </Row>
                            <Row>
                                Base sum assured
                </Row>
                        </Col>
                        <Col xs={6} style={{ contentAlign: "Right" }}>
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
            <Modal.Footer className="row d-flex justify-content-center pt-3" style={{ textAlign: "center", contentAlign: "center", padding: "Auto", borderTopWidth: 0 }}  >
                <Button className="my-auto" variant="info" size="md" style={{ backgroundColor: "#005dbe", borderRadius: 50, fontSize: 15 }} onClick={() => { handleShow(false) }}>
                    <b>PROCEED</b>
                </Button>
            </Modal.Footer>
        </Modal>

    )

}

export default SODModal;