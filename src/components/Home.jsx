import React,{Component} from 'react';
import LatestNews from './Home/LatestNews';
import Artist from './Home/Artist';
import Magazine from './Home/Magazine';
import Projects from './Home/Projects';

class Home extends Component{
    constructor(props){
        super();
        this.state={
            settings:{
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                arrows:true,
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
                    breakpoint: 700,
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

    render(){
        return(
            <React.Fragment>
                <LatestNews settings={this.state.settings}/>
                 <Artist/>
                <Magazine settings={this.state.settings}/>
                <Projects/>
            </React.Fragment>
        )
    }
};

export default Home;