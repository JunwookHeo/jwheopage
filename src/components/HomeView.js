import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap'

export default function HomeView() {
  return (
    <Card style={{ width: '24rem', marginTop: '1rem' }}>
      <Card.Body>
        <Card.Title>What is computer proramming?</Card.Title>
        <Card.Text>
          Computer programming is the process of designing and building an executable computer program
          to accomplish a specific computing result or to perform a specific task.
    </Card.Text>
        <Nav.Link href="https://en.wikipedia.org/wiki/Computer_programming">From wikipedia</Nav.Link>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Img variant="top" src={require('../resources/jefferson-santos-V9sv7QrDUgc-unsplash.jpg')} />
    </Card>
  );
}

