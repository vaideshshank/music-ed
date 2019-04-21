import React from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
import '../../../stylesheets/Magazine/All.css';


const All=(props)=>{
    var select=(e)=>{
        //console.log(e.target.className);
        if(e.target.className=="fa fa-bookmark-o"){
            e.target.className="fa fa-bookmark";
            e.target.style.color="#e80622";
        }else{
            e.target.className="fa fa-bookmark-o";
            e.target.style.color="rgba(255, 255, 255, 0.705)";
        }
    };

    return(
        <div class="allMagazine">
            {
                props.data.map((val,ind)=>{
                    return(
                        <div key={ind}>
                            <div>
                                <img src={Placeholder} alt=""/>
                                <i class="fa fa-bookmark-o" aria-hidden="true" onClick={select}></i>
                            </div>
                            <span>{val.heading}</span>
                            <span>{val.date}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default All