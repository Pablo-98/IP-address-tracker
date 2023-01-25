import { useState } from 'react'
import './App.css'
//need to import my map component
import {map, GoogleApiWrapper } from 'google-maps-react';

function App() {
  // applicaton is a single page

  //variable to store user input
  var userInput;



  return (
    <div className="container">

      <div className="header-div">
        <h3 id="main-title"> IP address tracker</h3>
        <div className="searchBar">
          <input  id="search-bar" type="text" placeholder="Search for any IP address or domain">
           </input>
           <button onClick=""> default</button>
           


        </div>
      </div>
      

      <div className ="map">
        <Map 
        google = {this.props.google}
        zoom = {8}
        style = {mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
        />



        
      </div>
    </div>

  )
}
// in React we work with components
// that means, inside of the div where my map should be loading, I should be calling a method created in another file
//that being said the next file will be called maps.js

export default GoogleApiWrapper({
  apiKey: "AIzaSyDhg4aCCXo1c_XqaMvNGzxArb5JpiqPql4"
})(MapContainer);
