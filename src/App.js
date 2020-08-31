import React from 'react';
import { Container } from 'react-bootstrap';

import Routes from './components/Routes'

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Routes></Routes>
      </Container>
    </div>
  );
}

export default App;
