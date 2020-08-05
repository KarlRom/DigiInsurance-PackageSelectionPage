import React from 'react';
import { Container, Row, Col, Button,  Modal } from 'react-bootstrap';

import './components/Package-Selection.css';
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
          <PackageSelection />
        </Container>

      </div>
    );
  }
}

export default App;
