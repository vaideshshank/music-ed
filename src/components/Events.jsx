import React, { Component } from 'react';
import TopEvents from './Events/TopEvents'; 
import Featured from './Featured';
import MultipleEvents from './Events/MultipleEvents';

class Events extends Component {
  constructor(){
    super();
    this.state={
      settings:{
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
              {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
              },
              {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
              },
              {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
              }
          ]
          }
    }
  }
  render() {
    return (
      <React.Fragment>
      <TopEvents settings={this.state.settings}/>
      <Featured heading="featured events"/>
      <MultipleEvents/>
      </React.Fragment>
    )
  }
}

export default Events
