import './Data/DataServices';
import { GetData } from './Data/DataServices';
import { Container, Row, Col } from "react-bootstrap";



export default function Header (){
 const handleClick = async() =>{
  const Data = await GetData()
  console.log(Data);
 }


 return (
   <Container>
     <Row>
       <Col>
         <h1 style={{ color: "blue", fontSize: "2rem", textAlign: "center" }}>
           5 day Weather forecast
         </h1>
         
       </Col>
       <Col>
         <div>
           <button onClick={handleClick}></button>
         </div>
       </Col>
     </Row>
   </Container>
 );

}