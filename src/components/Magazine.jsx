import React,{Component} from 'react';
import Articles from "./Magazine/Articles";
import MagazinePics from './Magazine/MagazinePics';

var {articles}=require('../data/articles.json');

class Magazine extends Component{
    constructor(props){
        super(props);
        this.state = {
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
  
        render(){
        return(
            <div>
                <Articles settings={this.state.settings} data={articles}/>
                <MagazinePics/>
            </div>
        )
    }
}

export default Magazine;