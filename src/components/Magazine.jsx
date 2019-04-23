import React,{Component} from 'react';
import Articles from "./Magazine/Articles";
import MagazinePics from './Magazine/MagazinePics';
import axios from 'axios';

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
                 
          },

          articles:[]
      
        }
      }

      componentWillMount(){
        axios.get("https://cors-anywhere.herokuapp.com/http://142.93.38.157:5000/api/articles?kind=news")
        .then(({data})=>{
            //console.log(data.data);
            this.setState(prevState=>({
                ...this.state,
                articles:[...data.data]
            }),()=>{
                //console.log(this.state.imageContent);
            })
        })

    }
      
  
        render(){
        return(
            <div>
                <Articles settings={this.state.settings} data={this.state.articles}/>
                <MagazinePics/>
            </div>
        )
    }
}

export default Magazine;