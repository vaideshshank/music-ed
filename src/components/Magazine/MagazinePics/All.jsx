import React from 'react';
import Placeholder from '../../../assets/images/Placeholder.png';
import '../../../stylesheets/Magazine/All.css';
import Loader from 'react-loader-spinner';



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
        <>
        <MusicLoader data={props.data}/>
        <div class="allMagazine">
            {
                props.data.map((val,ind)=>{
                    return(
                        <div key={ind}>
                            <div>
                                <img src="http://142.93.38.157:5000/static/img/default.jpg" alt=""/>
                                <i class="fa fa-bookmark-o" aria-hidden="true" onClick={select}></i>
                            </div>
                            <span>{val.title}</span>
                            <span>{val.created_on}</span>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}


const MusicLoader=(props)=>{
    if(props.data.length==0){
        return <div className="loader">
        <Loader 
           type="Audio"
           color="#e2bc15"
           height="100"	
           width="100"
        />   
        </div>
    }
    return <></>
}
export default All