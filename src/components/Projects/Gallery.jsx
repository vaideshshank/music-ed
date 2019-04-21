import React, { Component } from 'react'
import Slider from 'react-slick';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Projects/Gallery.css'

class Gallery extends Component{

    
    highlight=(e)=>{
        var img=e.target;
        img.style.opacity="1";
    }

    unhighlight=(e)=>{
        var img=e.target;
        img.style.opacity="0.5";
    }
    render(){
        return (
        <div>
            <Slider {...this.props.settings} className="slider7">
                {
                    [...Array(8).keys()].map((val,ind)=>{
                    return <div className="singleImg">
                                <img src={Placeholder} key={ind} onMouseOver={this.highlight} onMouseLeave={this.unhighlight}/>
                                <span>{this.props.data[val%4]}</span>
                            </div>
                    })
                }
            </Slider>
        </div>
        )
    }
}

export default Gallery;