import React from 'react'
import {Button,Container,Image} from "react-bootstrap"
import "./main.css"
import mySvg from './filtericon.svg'; // Import your SVG

const Main = () => {
  return (
    <div>
  <Container>
      <div className="button-container">
        <div className="buttons-left">
          <Button variant="link" className="custom-buttonn">
          <Image src={mySvg} alt="svg" width="30" height="30" className="button-svg" /> 

            </Button>{' '}
          <Button variant="primary" className="custom-button2">ALL</Button>{' '}
          <Button variant="success" className="custom-button">NEOM</Button>{' '}
          <Button variant="warning" className="custom-button">AMAALA</Button>{' '}
          <Button variant="danger" className="custom-button">TDRSC</Button>{' '}
          <Button variant="info" className="custom-button">MAKKAH</Button>{' '}
          <Button variant="light" className="custom-button">UMLAJJ</Button>{' '}
          <Button variant="dark" className="custom-button">ALMADINAH</Button>
        </div>
        <div className="buttons-right">
          <Button variant="link" className="view-all-button1">View all</Button>
        </div>
      </div>
    </Container>

    </div>
  )
}

export default Main