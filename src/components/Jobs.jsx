import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Listings from './Jobs/Listings';
var {jobs}=require('./../data/jobs.json')

class Jobs extends Component {
  

  render() {
    return (
      <div>
        <Listings heading="All jobs" data={jobs}/>
      </div>
    )
  }
}

export default Jobs
