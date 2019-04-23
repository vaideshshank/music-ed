import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Listings from './Jobs/Listings';
import FeaturedJobs from './News/FeaturedNews';
import axios from 'axios';
var {jobs}=require('./../data/jobs.json');
var {featured} =require('./../data/news.json');



class Jobs extends Component {
  state={
    jobs:[]
  }

  componentWillMount(){
    axios.get("https://cors-anywhere.herokuapp.com/http://142.93.38.157:5000/api/jobs")
    .then(({data})=>{
        //console.log(data.data);
        this.setState(prevState=>({
            ...this.state,
            jobs:[...data]
        }),()=>{
            //console.log(this.state.imageContent);
        })
    })

  }

  render() {
    return (
      <div>
        <FeaturedJobs heading="featured jobs" imageNo="5" data={featured}/>
        <Listings heading="All jobs" data={this.state.jobs}/>
      </div>
    )
  }
}

export default Jobs
