import React,{Component} from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Projects/Description.css';

class Projects extends Component{
    render(){
        var data=this.props.data[0];
        console.log(data);
        return(
            <div className="projectDescription">
                
                <div>
                    <span>{data.heading}</span>
                    <span><i className="fa fa-map-marker" aria-hidden="true"></i> {data.location}</span>
                    <span>Funded by: 
                        {
                            data.funded.map((val,ind)=>{
                                return <>
                                        <span key={ind}> {val} </span>
                                        {ind!=data.funded.length-1 && <span key={ind+20}>&</span>}
                                       </>
                            })
                        }
                    </span>
                    <span>about the project</span>
                    <p>{data.content}</p>
                    <span>read more</span>
                </div>
                
                <div>
                    <img src={Placeholder}/>
                    <div>
                        <img src={Placeholder}/>
                        <img src={Placeholder}/>
                        <img src={Placeholder}/>
                    </div>
                </div>
            </div>
        )
    }
}export default Projects