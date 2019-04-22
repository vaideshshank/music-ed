import React, { Component } from 'react'
import SummerSchool from './Resource/SummerSchool';
import PromotedSchools from './Resource/PromotedSchools';
import HolidayCourse from './Resource/HolidayCourse';
import {summerSchool,promotedSchool,holidayCourse} from '../data/resource.json';

class Resource extends Component {
  render() {
    return (
      <div>
        <PromotedSchools heading="promoted schools" imageNo="5" data={promotedSchool}/>
        <SummerSchool data={summerSchool}/>
        <HolidayCourse data={holidayCourse}/>
      </div>
    )
  }
}

export default Resource
