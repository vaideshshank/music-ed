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
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:true,
          },

          articles:[]
      
        }
      }


      componentWillMount=()=>{
        if(window.innerWidth<=800){
            this.setState({
                ...this.state,
                settings:{
                    ...this.state.settings,    
                    arrows:false
                }
            })
        }

        window.addEventListener('resize',()=>{
            if(window.innerWidth<=800){
                this.setState({
                    settings:{
                        ...this.state.settings,    
                        arrows:false
                    }
                })
            }
        })
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