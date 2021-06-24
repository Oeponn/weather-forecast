import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

const Temp = (props) => {
  return (
    <div>Temporary {props.weather}</div>
  )
}

export default function Curation() {
  useEffect(() => {
    console.log("Home Mounted")
  })

  return (
      <div className='container-main'>
        <Temp weather="Prop"/>
        <div className='inner'>
          <p>Home</p>
        </div>
      </div>
  )
}