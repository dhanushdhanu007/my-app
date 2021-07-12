import React, { Component } from "react";
import image from  "./shin1.jpg"
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Shin chan </h2>
        <p>Welcome to kid's world</p>
        <img src={image} alt="SHINCHAN"></img>
    
        </div>

    );
  }
}
 
export default Home;