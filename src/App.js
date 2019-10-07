import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Dogs from './Dogs';
import Dog from './Dog';
import Navbar from './Navbar';
import './App.css';
import hazel from './hazel.jpg';
import whiskey from './whiskey.jpg';
import tubby from './tubby.jpg';

export default class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  
  render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/dogs' render={()=><Dogs dogs={this.props.dogs}/>}/>
        <Route 
        exact path='/dogs/:dog' 
        render={(teste)=>{
          let dog = this.props.dogs.find((d)=>{
            return d.name.toLowerCase() === teste.match.params.dog;
          });
          return <Dog dog={dog}/>;
        }}
        />
        <Route render={()=><Redirect to="/dogs" />}/>
      </Switch>
    </div>
    )
  }
}
