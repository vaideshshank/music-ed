import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Listings from './Jobs/Listings';
import FeaturedJobs from './News/FeaturedNews';
var {jobs}=require('./../data/jobs.json');
var {featured} =require('./../data/news.json');

class Jobs extends Component {
  

  render() {
    return (
      <div>
        <FeaturedJobs heading="featured jobs" imageNo="5" data={featured}/>
        <Listings heading="All jobs" data={jobs}/>
      </div>
    )
  }
}

export default Jobs
