import React from "react"
import { Container, Row, Col, InputGroup, Button, Form, Card } from "react-bootstrap";


export default function Wcard(){
 return (
   <Container>
     <Row>
       <Col>
         <h1>5 day Forecast</h1>
       </Col>
     </Row>
     <Row>
       <Col>
         <InputGroup className='mb-3'>
           <Form.Control
             placeholder="Recipient's username"
             aria-label="Recipient's username"
             aria-describedby='basic-addon2'
           />
           <Button variant='outline-secondary' id='button-addon2'>
             Button
           </Button>
         </InputGroup>
       </Col>
     </Row>
     <Row>
       <Col>
         <Card style={{ width: "18rem" }}>
           <Card.Img variant='top' src='' />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </Card.Text>
             <Button variant='primary'>Go somewhere</Button>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card style={{ width: "18rem" }}>
           <Card.Img variant='top' src='' />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </Card.Text>
             <Button variant='primary'>Go somewhere</Button>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card style={{ width: "18rem" }}>
           <Card.Img variant='top' src='' />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </Card.Text>
             <Button variant='primary'>Go somewhere</Button>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card style={{ width: "18rem" }}>
           <Card.Img variant='top' src='' />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </Card.Text>
             <Button variant='primary'>Go somewhere</Button>
           </Card.Body>
         </Card>
       </Col>
       <Col>
         <Card style={{ width: "18rem" }}>
           <Card.Img variant='top' src='' />
           <Card.Body>
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
               Some quick example text to build on the card title and make up
               the bulk of the card's content.
             </Card.Text>
             <Button variant='primary'>Go somewhere</Button>
           </Card.Body>
         </Card>
       </Col>
     </Row>
   </Container>
 );
}