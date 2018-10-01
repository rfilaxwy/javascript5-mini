import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars =this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then((req,res) => {
      this.setState({
        cars: req.data
      })
    })
  }

  render() {
    const carss = this.state.cars.map((car,i)=>{
      return(
        <div key={i}>
          <p>
          {car.make}
          {car.model}
          {car.year}
          {car.color}
          </p>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {carss}
      </div>
    );
  }
}

export default App;
