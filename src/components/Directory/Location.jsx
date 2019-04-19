import React,{Component} from 'react';
import '../../stylesheets/Directory/Location.css';
import Locations from './Locations.jsx';
import Openings from './Openings.jsx';

class Location extends Component{
    render(){
        return(
            <div>
            <Locations imageNo="6" />
            <Openings data={this.props.data}/>
            </div>
        )
    }
}

export default Location;
