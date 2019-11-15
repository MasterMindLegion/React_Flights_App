import React, { useState } from "react";
import { Button } from 'reactstrap';

const URL = '/flights{?fly_from,fly_to,date_from,date_to,nights_in_dst_from,nights_in_dst_to,return_from,return_to,max_fly_duration,flight_type,adults,children,infants,selected_cabins,mix_with_cabins,adult_hold_bag,adult_hand_bag,child_hold_bag,child_hand_bag,fly_days,fly_days_type,ret_fly_days,ret_fly_days_type,one_for_city,only_working_days,only_weekends,one_per_date,direct_flights,locale,partner,partner_market,v,xml,curr,price_from,price_to,dtime_from,dtime_to,atime_from,atime_to,ret_dtime_from,ret_dtime_to,ret_atime_from,ret_atime_to,stopover_from,stopover_to,max_stopovers,conn_on_diff_airport,ret_from_diff_airport,ret_to_diff_airport,select_airlines,select_stop_airport,select_airlines_exclude,select_stop_airport_exclude,limit,sort,asc}';

const App = props => {
 

  const handleSubmitClick = (e) => {
    e.preventDefault()
    fetch(URL, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
 
    
  })
  }
  return (
    <Button color="danger">Danger!</Button>
  );
};

export default App;