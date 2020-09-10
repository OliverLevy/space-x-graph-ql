import React from "react";
import Moment from 'react-moment'

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) {
  console.log(flight_number);
  return (
    <div>
      <p>{flight_number}</p>
      
      <p>{mission_name}</p>
      <p><Moment fromNow>{launch_date_local}</Moment></p>
      <p>{launch_success ? <p>success</p> : <p>failed</p>}</p>
    </div>
  );
}
