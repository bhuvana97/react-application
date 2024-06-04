import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css'; // Import custom CSS for additional styling
import mySvg from './mysvg1.svg'; // Import your SVG

const footer = () => {
  return (
    <div>
     <footer className="footer bg-light-blue">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center text-md-left py-3 custom-butonn">
            <Image src={mySvg} alt="svg" width="100" height="100" className="footer-svg" />
          </Col>
          <Col xs={12} md={4} className="text-center py-3">
            <p className="footer-links">
              © 2022 | <a href="#aboutus">About Us</a> | <a href="#contactus">Contact Us</a> | <a href="#privacy">Privacy</a> | <a href="#terms">Terms</a> | <a href="#faq">FAQ</a>
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right py-3">
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default footer