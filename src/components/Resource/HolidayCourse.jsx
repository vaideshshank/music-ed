import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Resource/HolidayCourse.css';


const HolidayCourse=props=>{
    return(
        <div className="holidayCourse">
            <span>holiday course</span>
            <hr/>
            <div className="holCourseImgs">
            {
                props.data.map((val,ind)=>{
                    return(
                        <div key={ind}>
                            <img src={Placeholder}/>
                            <div>{val.title}</div>
                        </div>
                    )        
                })
            }
            </div>
        </div>
    )
}

export default HolidayCourse;