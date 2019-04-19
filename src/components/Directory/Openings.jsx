import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Directory/Openings.css';

const Locations=(props)=>{
    var select=(e)=>{
        console.log(e.target.className);
        if(e.target.className=="fa fa-heart-o"){
            e.target.className="fa fa-heart";
            e.target.style.color="#e80622";
        }else{
            e.target.className="fa fa-heart-o";
            e.target.style.color="black";
        }
    };

    var selectStars=(e)=>{
        var i,parent=e.target.parentNode,
            children=parent.childNodes;
        for(i=0; i<5; i++){
            children[i].className="fa fa-star";
            children[i].style.color="#ffc201";
            if(children[i]==e.target) break;
        }
        for(i+=1; i<5; i++){
            children[i].className="fa fa-star-o";
            children[i].style.color="black";
        }
        //setTimeout(()=>{/**kc4lr;4 */},1000)
    }

    var outlineStars=(e)=>{
        var i,parent=e.target.parentNode,
            children=parent.childNodes;
        for(i=0; i<5; i++){
            if(children[i].className!="fa fa-star"){
                children[i].className="fa fa-star-o";
            }
            children[i].style.color="#ffc201";
            if(children[i]==e.target) break;
        }
        for(i+=1; i<5; i++){
            children[i].className="fa fa-star-o";
            children[i].style.color="black";
        }
    }

    return(
        <div className="directoryItems">
            <select name="sort">
                <option value="jobType">Job type</option>
                <option value="location">Location</option>
            </select>
            <div>
                {
                    props.data.map((val,ind)=>{
                        return(
                            <>
                            <div className="card">
                                <img src={Placeholder}/>
                                <div>
                                    <div>
                                        <span>{val.job}</span>
                                        <span><i className="fa fa-heart-o" aria-hidden="true"
                                                    onClick={select}></i></span>
                                    </div>
                                    <div>
                                        <span><i className="fa fa-phone" aria-hidden="true"></i> {val.contact}</span>
                                        <span><i className="fa fa-map-marker" aria-hidden="true"></i> {val.location}</span>
                                        <span>{[...Array(5).keys()].map((val,ind)=>{
                                            return(
                                                <i className="fa fa-star-o" aria-hidden="true" key={ind} onClick={selectStars} onMouseOver={outlineStars}></i>
                                            )
                                        })}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Locations;