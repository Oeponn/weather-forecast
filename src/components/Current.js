import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";


const Current = () => {
	const [temp, setTemp] = useState(-100)

	useEffect(() => {
		if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    console.log("Current Mounted")
		console.log(process.env.REACT_APP_API_KEY)
		// const response =  fetch("api.openweathermap.org/data/2.5/weather?q=ann%20arbor&appid=" + mykey)
    // .then((resp) => {
		// 	// console.log("Printing response")
		// 	console.log(resp)
    //   return resp
    // })
  });

  return (
		<div className='container-main'>
			<div className='inner'>
				<p>CURRENT TEMPERATURE: {temp}</p>
			</div>
		</div>
	)
}

export default Current;