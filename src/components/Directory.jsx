import React,{Component} from 'react';
import '../stylesheets/Directory.css'
import Category from './Directory/Category.jsx';
import Location from './Directory/Location.jsx';
var {category,location}=require('../data/directory.json');

class Directory extends Component{
    render(){
        return(
            <div id="directory">
            <span className="title">listings</span>
            <div className="searchBar">
                <input type="text" className="search" placeholder="Search for Jobs"/>
                <button>Search</button>
                <Category data={category}/>
                <Location data={location}/>
            </div>
            </div>
        )
    }
};

export default Directory;