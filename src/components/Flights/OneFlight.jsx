import React, { useState, useEffect } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { DateTime } from 'luxon';

const OneFlight = props => {
  return (
    <>
      <div className="direction">
      <Card>
        <CardBody>
          <CardTitle></CardTitle>
  <CardSubtitle>From {props.nameOfOrigin} To {props.nameOfArrival}</CardSubtitle>
          <CardText>Time Of Departure: {props.timeOfDeparture}</CardText>
          <CardText>Time Of Arrival: {props.timeOfArrival}</CardText>
          <CardText>Price is {props.priceOfFlight} Euro</CardText>
          <CardText>Number Of flights is {props.numberOfFlights} </CardText>
          <Button>Get More Info</Button>
        </CardBody>
      </Card>
    </div>
    </>
  );
};

export default OneFlight;