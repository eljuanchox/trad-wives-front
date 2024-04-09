import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Deposit: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(./images/background.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Container>
        <Row>
          <Col md={12}>
            <h3>Trad Wives on Sol - $TRAD 🥪</h3>
            <h4>Bringing traditional values to Solana Ecosystem</h4>
            <h4 style={{color: "blue",  textDecoration: "underline", textShadow: "2px 2px 4px white"}}>#MAKEMEASANDWICH</h4>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '200px', // Adjust the width of the container
                height: '200px', // Adjust the height of the container
                margin: '0 auto', // Center the container horizontally
                border: '2px solid white', // Optional: Add border for visibility
                borderRadius: '50%', // Make the container round (for circular image)
              }}
            >
              <Image
                src="./images/tradwives2.jpg"
                style={{
                  width: '100%', // Make the image fill the container
                  height: '100%', // Make the image fill the container
                  objectFit: 'cover', // Maintain aspect ratio and cover the container
                  borderRadius: '50%', // Optional: Make the image round (for circular image)
                }}
                roundedCircle // Use roundedCircle prop for a circular image
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button
                variant="secondary"
                style={{ backgroundColor: "black", color: 'white', marginRight: '10px' }}
                href="https://twitter.com/tradonsol"
                target="_blank"
              >
                Twitter
              </Button>
              <Button
                variant="primary"
                style={{ color: 'white' }}
                href="https://t.me/+zFxVBwc_KDY5M2Q5"
                target="_blank"
              >
                Telegram
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Deposit;
