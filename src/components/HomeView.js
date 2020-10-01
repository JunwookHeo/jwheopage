import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap'

export default function HomeView() {
  return (
    <Card style={{ width: '35rem' }}>
      <Card.Img variant="top" src={require('../resources/diego-ph-fIq0tET6llw-unsplash.jpg')} />
      <Card.ImgOverlay>
      <Card.Body>
        <Card.Title>Thinking, Fast and Slow</Card.Title>
        <Card.Text>
        <ul>
          <li>System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control.</li>
          <li>System 2 allocates attention to the effortful mental activities that demand it, including complex computations. The operations of
              System 2 are often associated with the subjective experience of agency, choice, and concentration.</li>
        </ul>
        </Card.Text>
        <Nav.Link href="https://en.wikipedia.org/wiki/Daniel_Kahneman">Daniel Kahneman</Nav.Link>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      </Card.ImgOverlay>
      
    </Card>
  );
}

