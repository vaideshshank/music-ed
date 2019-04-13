import React, { PureComponent } from 'react';
import Placeholder from '../assets/images/Placeholder.png';
import Slider from 'react-slick';
import '../stylesheets/Featured.css';

class Featured extends PureComponent{
    constructor(props) {
      super(props);
    }

    render(){
        return(
            <div className="featured">
              <span>{this.props.heading}</span>
              {/* <div>
                img
              </div> */}
            </div>
        )
    }
    
};

export default Featured;