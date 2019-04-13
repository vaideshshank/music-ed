import React,{Component} from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
import '../../../stylesheets/Events/All.css'

var {all} =require('../../../data/events.json');

class All extends Component {
    displayAll=all.map((value,index)=>{
        return(
        <div key={index} className="singleItem1">
            <img src={Placeholder} alt=""/>
            <div>
                <span>{value.heading}</span>
                <span><i className="fa fa-map-marker" aria-hidden="true"></i> {value.place}</span>
                <span><i className="fa fa-calender" aria-hidden="true"></i> {value.date}</span>
                <span>{value.content}</span>
            </div>
          </div>
        )
    });
    
  render() {
    //  console.log(all);
    
    return (
      <div className="alldisplay">
        {this.displayAll}    
      </div>
    )
  }
}

export default All;