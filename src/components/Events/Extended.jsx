import React,{Component} from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Events/Extended.css';

const Extended =(props)=>{ 
    
    return(
        <div className="extended">
        <div className="heading">
            {props.tabs.map((val,ind)=>{
                return(
                    <span key={ind}>{val}</span>
                )
            })}
            <hr/>
        </div>
        <div className="content">
            <div className="video"></div>
            <div className="menu">
                {
                    props.data.map((val,index)=>{
                        return(
                            <>
                            <div key={index}>
                                <img src={Placeholder}/>
                                <div>
                                    <span>{val.heading}</span>
                                    <span><i className="fa fa-map-marker" aria-hidden="true"></i> {val.place}</span>
                                    <span><i className="fa fa-calendar" aria-hidden="true"></i> {val.date}</span>
                                </div>
                            </div>
                            <hr/>
                            </>
                        )
                    })
                }
            </div>
        </div>
        </div>
    )    
    
}

export default Extended;