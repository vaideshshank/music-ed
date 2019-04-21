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


    incrementPtr=async (e)=>{
        var imageCarousal=document.querySelectorAll('.imageCarousal')[0].childNodes;
        
        //fade away
        for(var i=0; i<3; i++){
          imageCarousal[i].style.opacity="0";
          imageCarousal[i].style.transition="opacity "+0.2*(i+1)+"s ease-in-out";  
        }

        console.log("Completed");
        
        this.setState(prevSt=>({
        pointer:(Number([this.state.pointer])+1)%this.props.imageNo
        }),()=>{
          
          var childPointers=document.querySelectorAll(".pointers2")[0].childNodes;
          var pointer=this.state.pointer,i;

          //fade in
          setTimeout(()=>{
            for(i=2; i>=0; i--){
                if(i%2==1) imageCarousal[i].style.opacity="1";
                else imageCarousal[i].style.opacity="0.4"; 
                imageCarousal[i].style.transition="opacity "+0.2*(i+1)+"s ease-in-out";
                if(i==0){
                  this.props.data.push(this.props.data.shift());
                  console.log("jpushed");
                }
              }
          },600);

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
      
      var imageCarousal=document.querySelectorAll('.imageCarousal')[0].childNodes;
        
        //fade away
        for(var i=2; i>=0; i--){
          imageCarousal[i].style.opacity="0";
          imageCarousal[i].style.transition="opacity "+0.2*(3-i)+"s ease-in-out";  
        }  
        var p=(Number([this.state.pointer])-1)%this.props.imageNo;
        if(p==-1){p=4}
        this.setState(prevSt=>({
        pointer:p
        }),()=>{
          var childPointers=document.querySelectorAll(".pointers2")[0].childNodes;
          var pointer=this.state.pointer,i;

          //fade in
          setTimeout(()=>{
            for(i=0; i<3; i++){
                if(i%2==1) imageCarousal[i].style.opacity="1";
                else imageCarousal[i].style.opacity="0.4"; 
                imageCarousal[i].style.transition="opacity "+0.2*(3-i)+"s ease-in-out";
              }
                this.props.data.push(this.props.data.shift());
                console.log("jpushed");
          },600);
 
            childPointers[pointer].style.color="#ffc201";
            childPointers[pointer].style.fontSize="14px";
            childPointers[pointer].style.transition="font-size 0.2s ease-in";
            if(pointer==4) pointer=-1;
            childPointers[(pointer+1)%this.props.imageNo].style.color="#707070";
            childPointers[(pointer+1)%this.props.imageNo].style.fontSize="10px";
            childPointers[(pointer+1)%this.props.imageNo].style.transition="font-size 0.2s ease-in";
        } 
      )
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