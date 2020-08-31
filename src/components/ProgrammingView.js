import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

var context = require.context('../data', false, /\.json$/);
var files = [];
context.keys().forEach((filename) => {
  console.log(filename);
  const file = context(filename)
  if(file.category.includes('P')){
    files.push(context(filename));
  }
  
});

export default function ProgrammingView() {

  files.map((file) => (console.log(file)))

  return (
    <Container>
      <Row>
        {files.map((file, i) =>
          <Col key={i} xs={6} md={4}>
            <p>{file.title}</p>
            <a href={file.url}>
            <Image src={file.imageurl} thumbnail />
            </a>
            <p>{file.description}</p>
          </Col>
        )}
      </Row>
    </Container>

  );
}

