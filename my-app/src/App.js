import React from 'react';
import {Container, Row, Col, Button , Modal } from 'react-bootstrap';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      showModal1:false,
      showModal2:false
    }
  }

  handleClose(id) 
  {
    this.setState({showModal1: false});
  }
  handleModal(id)
  {
    this.setState({showModal1: true})
  }
 
  render() {
    return (
    <div>
      {/*<h1> Bootstrap Modal in React</h1>*/}
      <Button onClick={()=>{this.handleModal()}}>Package Selection</Button>
      <Modal show ={this.state.showModal1} >
        <Modal.Header >Package Selection</Modal.Header>
        <Modal.Body className = "show-grid">
          <Container>
            <Row>
              <Col>
                <b>The package you chose</b>
              </Col>
              <col>
              arrow
              </col>
              <Col>
                <b>Select a deal</b>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button class = "text-left" onClick={()=>{this.handleClose()}}>
            Change Package
          </Button>
          <Button  onClick={() => this.setState({ showModal2:true, showModal1:false})}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show ={this.state.showModal2} >
        <Modal.Header >Summary of Deals</Modal.Header>
        <Modal.Body>
          SOD
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={()=>this.setState({ showModal2:false, showModal1:false})}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>      
    </div>
    );
  }
}

export default App;
