import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Resource/HolidayCourse.css';

const HolidayCourse=props=>{
    var pointer=0,check=false;
        //console.log("Images : "+images);
        
    var rotation=(arr,dir=true)=>{
        var arr2=[];
        arr.forEach((val,ind)=>{
            if(dir){
                arr2[(arr.length-1+ind)%arr.length]=val;
            }else{
                arr2[(ind+1)%arr.length]=val;
            }
        })
        return arr2;
    }

    var positionX=[],arr3=[0,1,2];
    /*[...Array(props.data.length).keys()].forEach((val)=>{
        positionX.push(images[val].offsetLeft-images[val].clientWidth*3/4);
    })*/
    // arr=[2,3,4,5,6];
    // arr=rotation(arr,false);
    // console.log(arr);
    var shiftForward=e=>{
        var imageLength=props.data.length,posX,
            images=document.querySelectorAll(".holCourseImgs")[0].childNodes;
        if(check==false){
            for(var i=0; i<imageLength; i++){
                positionX.push(images[i].offsetLeft-images[i].clientWidth*3/4);
            }
            check=true;
        }
        arr3.forEach((val,ind)=>{
            /*if(val==0){
                posX=positionX[val];
                images[val].style.transform=`translateX(${images[imageLength-1].offsetLeft-images[imageLength-1].clientWidth*3/4}px) scale(0.8)`;
                images[val].style.transition="transform 0.3s ease-in-out";
                console.log(posX);
            }else{*/
                var scale,prevind=ind-1;
                if(ind==1) scale=0.8;
                else scale=1.5;
                //var auxX=posX;
                //posX=positionX[val];
                //console.log(posX);
                if(prevind==-1){prevind=imageLength-1}
                images[val].style.transform=`translateX(${positionX[prevind]-positionX[ind]}px) scale(${scale})`;
                images[val].style.transition="transform 0.3s ease-in-out";
                console.log(images[val].offsetLeft-images[val].clientWidth*3/4);
            //}
        })       

        pointer++;
        if(pointer==imageLength) pointer=0;
        arr3=rotation(arr3);
        console.log(arr3);
       
    }

    var shiftBackward=e=>{
        pointer--;
        var imageLength=props.data.length,
            images=document.querySelectorAll(".holidayCourse .holCourseImgs").childNodes;
        pointer--;
        if(pointer<0) pointer=imageLength-1;
    }

    
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
            <div class="navs">
                <i className="fa fa-chevron-left increment" aria-hidden="true" onClick={shiftBackward}></i>
                <i className="fa fa-chevron-right increment" aria-hidden="true" onClick={shiftForward}></i>
            </div>
        </div>
    )
}

export default HolidayCourse;