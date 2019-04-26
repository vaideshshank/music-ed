import React, { Component } from 'react';
import LatestNews from './News/LatestNews'; 
import FeaturedNews from './News/FeaturedNews';
import MoreNews from './News/MoreNews';
var {featured} =require('./../data/news.json');

export class News extends Component {
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
      {/* <LatestNews settings={this.state.settings}/> */}
      {/* <FeaturedNews heading="featured news" imageNo="5" data={featured}/> */}
      <MoreNews/>
      </React.Fragment>
    )
  }
}

export default News
