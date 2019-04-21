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
        this.props.data.push(this.props.data.shift());
        
        this.setState(prevSt=>({
        pointer:(Number([this.state.pointer])+1)%this.props.imageNo
        }),()=>{
          var childPointers=document.querySelectorAll(".pointers2")[0].childNodes;
          var pointer=this.state.pointer; 
            childPointers[pointer].style.color="#ffc201";
            childPointers[pointer].style.fontSize="14px";
            childPointers[pointer].style.transition="font-size 0.2s ease-in";
            if(pointer==0) pointer=5; 
            childPointers[pointer-1].style.color="#707070";
            childPointers[pointer-1].style.fontSize="10px";
            childPointers[pointer-1].style.transition="font-size 0.2s ease-in";
          })
      
    }

    decrementPtr=()=>{
      if(this.state.pointer>0){
        this.props.data.unshift(this.props.data.pop());
        this.setState(prevSt=>({
        pointer:(Number([this.state.pointer])-1)%this.props.imageNo
        }),()=>{
          var childPointers=document.querySelectorAll(".pointers2")[0].childNodes;
          var pointer=this.state.pointer; 
            childPointers[pointer].style.color="#ffc201";
            childPointers[pointer].style.fontSize="14px";
            childPointers[pointer].style.transition="font-size 0.2s ease-in";
            if(pointer==4) pointer=-1;
            childPointers[pointer+1].style.color="#707070";
            childPointers[pointer+1].style.fontSize="10px";
            childPointers[pointer+1].style.transition="font-size 0.2s ease-in";
        } 
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
                  images.slice(0,3).map((val,ind)=>{
                      return (
                          <div key={ind}>
                          <img src={Placeholder} alt="" key={ind}/>
                          <span>{this.props.data[ind].heading}</span>
                          <span>{this.props.data[ind].date}</span>
                          </div>
                      )
                    })
                }
              </div>
              <div className="imageNav">
                <span><i className="fa fa-chevron-left decrement" aria-hidden="true" onClick={this.decrementPtr}></i></span>
                <span className="pointers2">
                  {
                    [...Array(Number(this.props.imageNo)).keys()].map((val)=>{
                      return <i className="fa fa-circle selector2" aria-hidden="true" key={val}></i>
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