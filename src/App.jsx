import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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
        
        
      </div>
    </div>

  )
}

export default App
