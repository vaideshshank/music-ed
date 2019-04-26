import React, { Component } from 'react';
import TopEvents from './Events/TopEvents'; 
import Featured from './Featured';
import MultipleEvents from './Events/MultipleEvents';
import Extended from './Events/Extended';
var {extended} =require('../data/events.json');


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
        {/* <Featured heading="featured events" imageNo='5'/>
        <MultipleEvents/>
        <Extended tabs={['events by region','events by calender']} data={extended}/> */}
      </React.Fragment>
    )
  }
}

export default Events
