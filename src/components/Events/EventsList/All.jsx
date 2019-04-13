import React,{Component} from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
var {all} =require('../../../data/events.json');

class All extends Component {
  
  allData=()=>{
      var x=all.map((value,index)=>{
        return(
        <div key={index}>
            <img src={Placeholder} alt=""/>
            <div>
                <span>{value.heading}</span>
                <span>{value.place}</span>
                <span>{value.date}</span>
                <span>{value.content}</span>
            </div>
          </div>
        )
      })
      return x; 
  }

  render() {
    //  console.log(all);
    
    return (
      <div>
        {this.allData}
      </div>
    )
  }
}

export default All;