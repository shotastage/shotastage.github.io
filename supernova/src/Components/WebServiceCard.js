import React from 'react';
import { Card, Button } from 'react-bootstrap';
import images from '../images/pinna_start_screen.png';


export class WebServiceCard extends React.Component {


  render() {
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>PINNA</Card.Title>
                <Card.Text>
                PINNA is musical & geolocational web service that I created on 2016 autumn.
                You can share songs, movies on Spotify or YouTube on Map.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
  }
}
