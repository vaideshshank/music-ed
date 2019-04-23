import React, { PureComponent } from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Resource/PromotedSchools.css';

class Featured extends PureComponent{
    constructor(props) {
      super(props);
      this.state={pointer:0};
    }


    incrementPtr=(e)=>{  
        this.setState(prevSt=>({
        pointer:(Number([this.state.pointer])+1)%this.props.imageNo
        }),()=>{
            var childPointers=document.querySelectorAll(".pointers")[0].childNodes;
            var pointer=this.state.pointer,i;
            childPointers[pointer].style.color="#ffc201";
            childPointers[pointer].style.fontSize="14px";
            childPointers[pointer].style.transition="font-size 0.2s ease-in";
            
            var promotedSchool=document.querySelectorAll(".promotedSchool")[0];
            var schoolContainer=promotedSchool.childNodes;
            /*schoolContainer.forEach((cont,ind)=>{
              cont.style.display="none"
              if(ind===pointer){
                console.log("changes");
                cont.style.display="flex";
              };
              console.log(cont.style.display);
            })*/
            var slideBy=-(schoolContainer[0].clientWidth*pointer-100);
            promotedSchool.style.transform=`translateX(${slideBy}px)`;
            // schoolContainer[0].style.transform="translateX(-100px)";
            schoolContainer[pointer].style.opacity="1";
            promotedSchool.style.transition="transform 0.5s ease";
            schoolContainer[pointer].style.transition="opacity 0.5s ease";
            
            // console.log(schoolContainer[0].style.transform);
            

            if(pointer==0) pointer=5; 
            
            childPointers[pointer-1].style.color="#707070";
            childPointers[pointer-1].style.fontSize="10px";
            childPointers[pointer-1].style.transition="font-size 0.2s ease-in";
            schoolContainer[pointer-1].style.opacity=".2";
            schoolContainer[pointer-1].style.transition="opacity 0.5s ease";

            
          
          });

        
    }

    decrementPtr=()=>{
        var p=(Number([this.state.pointer])-1)%this.props.imageNo;
        if(p==-1) p=(Number([this.props.imageNo])-1)
        this.setState(prevSt=>({
        pointer:p
        }),()=>{
            var childPointers=document.querySelectorAll(".pointers")[0].childNodes;
            var pointer=this.state.pointer,i;
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
        return(
            <div className="featured">
              <span>{this.props.heading}</span>
              <div class="promotedSchool">
                {   
                    [...Array(Number(5)).keys()].map(val=>{
                        return (
                        <div className="schoolContainer" key={val}>
                        {
                            this.props.data.slice(0,3).map((val,ind)=>{
                                return( 
                                    <div key={ind}>
                                        <img src={Placeholder}/>
                                        <div>{val.heading}</div>
                                        <div>{val.content}</div>
                                    </div>)
                            })
                        }
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