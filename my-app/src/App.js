import React from 'react';
import {Button , Modal } from 'react-bootstrap';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      show:false
    }
  }
  handleModal()
  {
    this.setState({show:!this.state.show})
  }
  render() {
    return (
    <div>
      {/*<h1> Bootstrap Modal in React</h1>*/}
      <Button onClick={()=>{this.handleModal()}}>Open Modal</Button>
      <Modal show ={this.state.show} onHide={()=>this.handleModal()} >
        <Modal.Header >Modal Head Part</Modal.Header>
        <Modal.Body>
          Hi , React modal is here
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={()=>{this.handleModal()}}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default App;
