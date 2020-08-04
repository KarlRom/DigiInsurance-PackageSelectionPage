import React from 'react';
import { Card, Container, Row, Col, Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

import { PDSModal } from './components/PackageDealSelectionModal.js';
import { PackageCard } from './components/PackageCard.js';

import './components/Package-Selection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PackageSelection from './components/PackageSelection.js';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isModalOpen: false,
      isModalOpen2: false
    };

  }



  render() {

    return (
      <div className="p-3">
        {/*<h1> Bootstrap Modal in React</h1>*/}

        <Container fluid>

          <PackageSelection/>

        </Container>

        <Modal size="m" className="p-3" show={this.state.isModalOpen2} flex>
          <Modal.Body className="mx-3 p-3">
            <Row >
              <h3><b>YOUR BENEFITS</b></h3>
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
          <Modal.Footer className="my-auto" style={{ textAlign: "center", contentAlign: "center", padding: "Auto" }}  >
            <Button className="my-auto" style={{ textAlign: "center", contentAlign: "center", padding: "Auto" }} onClick={this.closeSummary}>
              PROCEED
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
