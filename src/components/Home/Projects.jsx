import React,{Component} from 'react';
import '../../stylesheets/Home/Projects.css';
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';

export default class Projects extends Component{
    constructor(){
        super();
    }

    render(){
        var proj=[{
            topHead:'Original Fine Art',
            head:'Heading of the Projects Section',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor leo in metus dignissim ultrices. Phasellus non dapibus nisl, in pretium mi. Maecenas molestie massa leo, quis efficitur.'
        },{
            topHead:'Heading',
            head:'Heading of the Projects Section',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor leo in metus dignissim ultrices. Phasellus non dapibus nisl, in pretium mi. Maecenas molestie massa leo, quis efficitur.'
        }]

        var placement=[...Array(2).keys()].map((val)=>(
            <div key={val} className="singleProject">
                <img src={Placeholder} alt="Placeholder"/>
                <div>
                    <span>{proj[val].topHead}</span>
                    <span>{proj[val].head}</span>
                    <span>{proj[val].content}</span>
                    <button>Learn More</button>
                </div>
            </div>
        )
        )
    
        return(
            <div className="project">
                <div>
                    <span>Projects</span>
                    <span>view all</span>
                    <hr/>
                </div>

                <Slider {...this.props.settings} className="slider3">
                    {placement}
                </Slider>
            </div>
        )
    }
}