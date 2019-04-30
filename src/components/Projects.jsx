import React,{Component} from 'react';
import Gallery from './Projects/Gallery';
import Description from './Projects/Description';
var {description,titles}=require('../data/projects.json');

class Projects extends Component{

    constructor(props){
        super(props);
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
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                    }
                ]
            }
        }
        
    }
    componentDidMount(){
        if(window.innerWidth<=700){
              this.setState({
                  settings:{
                      ...this.state.settings,    
                      arrows:false,
                      dots:true
                  }
              })
          }
    
          window.addEventListener('resize',()=>{
              if(window.innerWidth<=700){
                  this.setState({
                      settings:{
                          ...this.state.settings,    
                          arrows:false,
                          dots:false
                      }
                  })
              }
          })
    }
    render(){
        
        return(
            <div>
                <Gallery settings={this.state.settings} data={titles}/>
                <Description data={description}/>
            </div>
        )
    }
}export default Projects