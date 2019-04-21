import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import Slider from 'react-slick';
import '../../stylesheets/Articles/Articles.css';

const Magazine=(props)=>{
    return(
        <div class="articlesSection">
            <span>Latest Articles</span>
            <Slider className="slider6">
                {
                    props.data.map((val,ind)=>{
                        return(
                            <div key={ind} class="singleCard">
                                <span>
                                    <span>{val.heading}</span>
                                    <span>{val.date}</span>
                                    <span>{val.tag}</span>
                                    <span>{val.content}</span>
                                </span>
                                <span><img src={Placeholder} alt=""/></span>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default Magazine;