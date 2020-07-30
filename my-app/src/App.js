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
    this.setState({show:true})
  }
  render() {
    return (
    <div>
      {/*<h1> Bootstrap Modal in React</h1>*/}
      <Button onClick={()=>{this.handleModal()}}>Open Modal</Button>
      <Modal show ={false} >
        <Modal.header>Modal Head Part</Modal.header>
        <Modal.Body>
          Hi , React modal is here
        </Modal.Body>
        <Modal.Footer>
          <Button>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default App;
