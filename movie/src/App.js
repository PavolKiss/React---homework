import React, { Component } from 'react';
import Movie from './components/movie';

class App extends Component {
  state = {
    data: [
      {id: 1, title: "Big Trouble in Little China ", year: 2018, description: "A truck driver and his friend get drawn into an unexpected battle with an ancient sorcerer in Chinatown."},
      {id: 2, title: "Furious 6", year: 2013, description: "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries: Dominic unexpectedly gets convoluted also facing his presumed deceased girlfriend, Letty."},
      {id: 3, title: "Hercules", year: 2014, description: "Having endured his legendary twelve labors, Hercules, the Greek demigod, has his life as a sword-for-hire tested when the King of Thrace and his daughter seek his aid in defeating a tyrannical warlord."},
      {id: 4, title: "Tooth Fairy", year: 2010, description: "A bad deed on the part of a tough minor-league hockey player results in an unusual sentence: He must serve one week as a real-life tooth fairy."},
      {id: 5, title: "Gridiron Gang", year: 2006, description: "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together."}
    ]
  };

  render() {
    return (
      <div>
        {this.state.data.map(item => (
        <Movie 
        id={item.id} 
        title={item.title} 
        year={item.year} 
        description={item.description}
        />
        ))}
      </div>
    );
  }
}

export default App;
