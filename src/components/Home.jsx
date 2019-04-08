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