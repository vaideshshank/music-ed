import React, { Component } from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';
import '../../stylesheets/Events/TopEvents.css';
var {topEvents}=require('../../data/topEvents.json');


class TopEvents extends Component {
    
  constructor(){
      super();
      this.state={topEvents}
  }

  render() {
    var filler=this.state.topEvents.map((val,ind)=>{
        return (
        <div key={ind} class="singleEve">
            <div>
                <span>{val.heading}</span>
                <span><i class="fa fa-map-marker" aria-hidden="true"></i> {val.location}</span>
                <span><i class="fa fa-calendar" aria-hidden="true"></i> {val.date}</span>
                <span>{val.content}</span>
                <span>read more</span>
            </div>
            <img src={Placeholder} alt="Placeholder"/>
        </div>
        )
    })

    return (
      <div className="tEvents">
        <span>top Events</span>
        <Slider className="slider5">
            {filler}
        </Slider>
      </div>
    )
  }
}

export default TopEvents
