import React from 'react'
import { useState, useEffect } from 'react';
import { Card, Row, Col ,Container} from 'react-bootstrap';
import axios from "axios"
import "./apicall.css"
import styled from 'styled-components';


const StyledCard = styled(Card)`
  margin-bottom: 20px;
  width: 300px;
height: 340px;
margin: 0 auto;
paddingBottom:10px;
`;

const StyledCardTitle = styled(Card.Title)`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-weight: bold;
`;
const Apicall = () => {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('http://54.211.157.92/diving/laravel2/api/V1/site/home?site=all')
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       setData(data);
    //     });
    // }, []);
  
    useEffect(() => {
        axios.get('http://54.211.157.92/diving/laravel2/api/V1/site/home?site=all')
          .then(response => setData(response.data))
          .catch(error => console.error(error));
      }, []);
    return (
    <div>

<div>
<Row className="justify-content-center">
      {Array.isArray(data.data) && data.data.map((item, index) => (
        <Col key={index} md={4}>
          <StyledCard>
            <Card.Img variant="top" src={item.featured_image} />
            <StyledCardTitle>{item.title}</StyledCardTitle>
            <Card.Body>
              <Card.Text>
                Name: {item.name}
                <br />
                Current: {item.current}
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
      ))}
    </Row>
    </div>
<div>
<Container>
      {/* <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        <Col xs>Second, but unordered</Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
      </Row> */}
      <Row className="justify-content-center">
      {Array.isArray(data.data) && data.data.map((item, index) => (
        <Col key={index} md={4}>
          <StyledCard>
            <Card.Img variant="top" src={item.featured_image_382*260} />
            {/* <StyledCardTitle>{item.title}</StyledCardTitle> */}
            <Card.Body>
         
            </Card.Body>
          </StyledCard>
        </Col>
      ))}
    </Row>
    </Container>
</div>



    </div>
  )
}


export default Apicall