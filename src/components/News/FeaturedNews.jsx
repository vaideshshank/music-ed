import React, { PureComponent } from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';
import '../../stylesheets/Featured.css';
import $ from 'jquery'; 

class Featured extends PureComponent{
    constructor(props) {
      super(props);
      this.state={pointer:0};
    }


    incrementPtr=(e)=>{
      if(this.state.pointer<this.props.imageNo-1){
      this.setState(prevSt=>({
        pointer:Number([this.state.pointer])+1
        })
      )}
    }

    decrementPtr=()=>{
      if(this.state.pointer>0){
      this.setState(prevSt=>({
        pointer:Number([this.state.pointer])-1
        }) 
      )}
      }
    render(){
        var {imageNo}=this.props;
        var images=[...Array(Number(imageNo)).keys()];
        console.log("Pointer value : " + this.state.pointer);
        return(
            <div className="featured">
              <span>{this.props.heading}</span>
              <div className="imageCarousal"> 
                {
                  images.slice(this.state.pointer,this.state.pointer+3).map((val,ind)=>{
                      return (
                          <div>
                          <img src={Placeholder} alt="" key={ind}/>
                          <span>{this.props.data[ind%3].heading}</span>
                          <span>{this.props.data[ind%3].date}</span>
                          </div>
                      )
                    })
                }
              </div>
              <div className="imageNav">
                <span><i className="fa fa-chevron-left decrement" aria-hidden="true" onClick={this.decrementPtr}></i></span>
                <span className="pointers">
                  {
                    [...Array(Number(this.props.imageNo)).keys()].map((val)=>{
                      return <i className="fa fa-circle" aria-hidden="true" key={val}></i>
                    })
                  }
                </span>
                <span><i className="fa fa-chevron-right increment" aria-hidden="true" onClick={this.incrementPtr}></i></span>
              </div>
            </div>
        )
    }
    
};

export default Featured;