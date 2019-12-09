import React, { useState, useEffect } from "react";
import { Button } from 'reactstrap';
import { DateTime } from 'luxon';
import OneFlight from "./Flights/OneFlight.jsx";
import FlightTo from "./Flights/FlightTo.jsx";
import FlightFrom from "./Flights/FlightFrom.jsx";
import FlightCheckbox from "./Flights/FlightCheckbox.jsx";



const App = props => {
 
  const [flightData, setFlightData] = useState([]);
  
  const [fromCityValue, setFromCityValue] = useState();
  const [fromCityId, setFromCityId] = useState();

  const [toCityValue, setToCityValue] = useState();
  const [toCityId, setToCityId] = useState();

  const [loading, setLoading] = useState(false);

  const [direct, setDirect] = useState(1);

  const [OneFlights, setOneFlights] = useState();

  const callAPI = () => {
    const  cityFrom = fromCityId || "PRG";
    const  cityTo = toCityId   || "VLC";
    const directURL = direct || 1;
    const URL = "https://api.skypicker.com/flights?direct_flights="+ directURL +"&locale=en&partner=picky&limit=5&sort=price&asc=1&date_from=16/11/2019&date_to=17/11/2019&fly_from="+ cityFrom + "&fly_to="+ cityTo;
    console.log(URL);
    fetch(URL, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      
      if(data.data != "") { 
       
        setFlightData(data.data);
        
      } else {
        console.log("error")
      }
    
    })
  }

  useEffect(() => {
   callAPI();
  }, [])

  useEffect(() => {
    if(toCityId && fromCityId) {
      callAPI();
    };
  }, [toCityId, fromCityId, direct])

  useEffect(() => {
    if(flightData != "") {
      setOneFlights(flightData.map((flight, index) => {

      console.log('thanks')
   
    return  ( 
       
          <OneFlight 
           key= {index}
           numberOfFlights = {flight.route.length}
           timeOfDeparture = {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}
           timeOfArrival = {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}
           nameOfOrigin = {flight.flyFrom}
           priceOfFlight = {flight.price}
           nameOfArrival = {flight.flyTo}  
         />
      )
      }
    ))
    }
  }, [flightData])
  
 const handleSetFrom = (e) => {
   setFromCityValue(e.target.value)
   setFromCityId(e.target.id)
}
const handleSetTo = (e) => {
  setToCityValue(e.target.value)
  setToCityId(e.target.id)
}
const handleDirectFlights = (e) => {
  setDirect(e.target.value)
 console.log("app", direct);
}





  return (
    <>
    <div className="dir">

    
    <h1>Offered Flights</h1>
      {OneFlights} 
      <FlightCheckbox handleDirectFlights={handleDirectFlights}/>
     <FlightFrom handleSetFrom = {handleSetFrom} from = {fromCityValue}/>
     <FlightTo handleSetTo = {handleSetTo} to = {toCityValue}/>
     </div>
    </>


  );
};

export default App;