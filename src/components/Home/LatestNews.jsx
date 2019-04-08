import React, { Component } from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Home/LatestNews.css';
import Slider from 'react-slick';

export default class LatestNews extends Component {
  
  render() {
      
    var headline="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem nisi vel\
             praesentium dicta est ipsum delectus unde in et!"
    var date='5th October 2018';
    
    var placement=[...Array(8).keys()].map((val)=>(
            <div key={val}>
                <img src={Placeholder} alt="Placeholder"/>
                <div>
                    <span>{headline}</span>
                    <span>{date}</span>
                </div>
            </div>
        )
    )

    return (
        <div className="parent">
          <div>
              <span>latest news</span>
              <span>read more</span>
              <hr/>    
          </div>
          
          <Slider {...this.props.settings} className="slider1">
                      {placement}
              
          </Slider>
        </div>
    )
  }
}
