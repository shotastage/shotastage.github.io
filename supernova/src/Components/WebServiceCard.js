import React from 'react';
import { Card } from 'react-bootstrap';
import { SHButton } from './Buttons';
import images from '../images/pinna_start_screen.png';


export class WebServiceCard extends React.Component {


  render() {
    return (
        <Card>
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>PINNA</Card.Title>
                <Card.Text>
                PINNA is musical & geolocational web service that I created on 2016 autumn.
                You can share songs, movies on Spotify or YouTube on Map.
                </Card.Text>
                <SHButton link="https://pinna-map.herokuapp.com" otherTab>GO THIS PAGE</SHButton>
            </Card.Body>
        </Card>
    );
  }
}
