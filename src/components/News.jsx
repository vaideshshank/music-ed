import React, { Component } from 'react';
import LatestNews from './News/LatestNews'; 
import FeaturedNews from './News/FeaturedNews';
import MoreNews from './News/MoreNews';
import Loader from 'react-loader-spinner';
var {featured} =require('./../data/news.json');

export class News extends Component {
  constructor(){
    super();
    this.state={
      settings:{
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          
          }
    }
  }

  componentDidMount(){
    if(window.innerWidth<=700){
          this.setState({
              settings:{
                  ...this.state.settings,    
                  arrows:false
              }
          })
      }

      window.addEventListener('resize',()=>{
          if(window.innerWidth<=700){
              this.setState({
                  settings:{
                      ...this.state.settings,    
                      arrows:false
                  }
              })
          }
      })
}

  render() {
    return (
      <React.Fragment>
      <LatestNews settings={this.state.settings}/> 
      <FeaturedNews heading="featured news" imageNo="5" data={featured}/>
      <MoreNews/>
      </React.Fragment>
    )
  }
}

export default News
