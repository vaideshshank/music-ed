import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Resource/SummerSchools.css';

const SummerSchool=(props)=>{
    return(
        <div className="summerSchool">
            <span>all summer schools</span>
            <hr/>
            <div className="sumSchoolImgs">
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

export default SummerSchool;