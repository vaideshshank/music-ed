import React from 'react';
import Placeholder from '../../assets/images/Placeholder.png';
import '../../stylesheets/Home/Artist.css';


const Artist=()=>{
    var heading="artist of the week",
        name="Debashis Bhuiyan",
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum \
                porttitor leo in metus dignissim ultrices. Phasellus non dapibus nisl, \
                in pretium mi. Maecenas molestie massa leo quis efficitur dolor tristique et."

    return(
        <div className="flex1">
            <div>
                <span>{heading}</span>
                <span>{name}</span>
                <span>{content}</span>
                <div>View Collection</div>
            </div>
            <img src={Placeholder} alt="Placeholder"/>
        </div>
    )
}

export default Artist;