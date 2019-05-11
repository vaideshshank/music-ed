import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';
import '../../stylesheets/Articles/Articles.css';

const Magazine=(props)=>{

    return(
        <div className="articlesSection">
            <span>Latest Articles</span>
            <Slider className="slider6" {...props.settings}>
                {   
                    props.data.map((val,ind)=>{
                        return(
                            <div key={ind} className="singleCard">
                                <span>
                                    <span>{val.title}</span>
                                    <span>{val.created_on}</span>
                                    <span>London Music</span>
                                    <span>{val.description}</span>
                                </span>
                                <span><img src={process.env.REACT_APP_IMAGE} alt=""/></span>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Magazine;