import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Directory/Locations.css';

const Locations=(props)=>{
    var images={}
    return(
        <div>
            <div className="heading">Browse by Location</div>
            <div className="locations">
            {
                [...Array(Number(props.imageNo)).keys()].map((val,ind)=>{
                    return (
                        <div key={ind}>
                            <img src={Placeholder} key={val} />
                            <span>Country</span>
                        </div>
                )
            })
        }
            </div>
        </div>
    )
}

export default Locations;