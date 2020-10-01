import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function NaviView() {
	return (
		<Navbar bg="dark" variant="dark" style={{ marginTop:'1rem', width:'100%' }}>
    <Navbar.Brand as={Link} to="/" >JWH</Navbar.Brand>
    <Nav className="m-auto">
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link as={Link} to="/programming" >Programming</Nav.Link>
      <Nav.Link as={Link} to="/machinelearning">Machine Learning</Nav.Link>
			<Nav.Link as={Link} to="/datascience">Data Science</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
	);
}
