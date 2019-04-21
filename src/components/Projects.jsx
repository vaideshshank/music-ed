import React,{Component} from 'react';
import Gallery from './Projects/Gallery';
import Description from './Projects/Description';
var {description,titles}=require('../data/projects.json');

class Projects extends Component{
    render(){
        var settings={
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
        return(
            <div>
                <Gallery settings={settings} data={titles}/>
                <Description data={description}/>
            </div>
        )
    }
}export default Projects