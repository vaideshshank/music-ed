import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/Jobs/Listings.css'

//material components
// import Input from '@material-ui/core/Input';
// import Checkbox from '@material-ui/core/Checkbox';
import Loader from 'react-loader-spinner';


class Listings extends Component {
        
    state={
        skills:[]
    }

    addSkill=(e)=>{
        if(e.which==13){
            var skill=this.state.skills;
            skill.push(e.target.value);
            this.setState({
                skills:skill
            });

            document.getElementById("inputSkill").value="";
        }
    }

    removeSkill=(e)=>{
        var skill=e.target.parentNode.innerText,
            skills=this.state.skills;
        skills=skills.filter(val=>{return (val!=skill)});
        this.setState({
            skills:skills
        })
    }

  render() {
    
    return (
      <div className="listingsFilter">
        <div className="heading">{this.props.heading}</div>
        <hr/>
        <div className="contentBox">
            <div>
                <span>filters</span>
                <div className="skills">
                    <span>Skills</span>
                    <div className="items">
                        <input type="text" id="inputSkill" placeholder="Enter your skill" onKeyPress={this.addSkill}/>
                        <div>
                            {
                                this.state.skills.map((val,ind)=>{
                                    return <span key={ind}>{val} <i className="fa fa-times" aria-hidden="true" onClick={this.removeSkill}></i></span>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="availability">
                    <span>Availability</span>
                    <div>
                        <div>
                            <input type="checkbox" name="availability" id="fixed terms"/>
                            <label htmlFor="fixed terms">Fixed Terms</label><br/>
                            <input type="checkbox" name="availability" id="freelance"/>
                            <label htmlFor="freelance">Freelance</label><br/>
                            <input type="checkbox" name="availability" id="full time"/>
                            <label htmlFor="full time">Full time</label><br/>
                            <input type="checkbox" name="availability" id="internship"/>
                            <label htmlFor="internship">Internship</label><br/>
                        </div>
                        <div>
                            <input type="checkbox" name="availability" id="part time"/>
                            <label htmlFor="part time">Part time</label><br/>
                            <input type="checkbox" name="availability" id="permanent"/>
                            <label htmlFor="permanent">Permanent</label><br/>
                            <input type="checkbox" name="availability" id="temporary"/>
                            <label htmlFor="temporary">Temporary</label><br/>
                            <input type="checkbox" name="availability" id="voluntary"/>
                            <label htmlFor="voluntary">Voluntary</label><br/>
                        </div>
                    </div>
                </div>
                <div className="jobType">
                    <span>Job type</span>
                    <div>
                        <select name="jobType" id="">
                            <option value="piano">Piano</option>
                            <option value="guitar">Guitar</option>
                            <option value="drum">Drum</option>
                            <option value="saxophone">Saxophone</option>
                        </select>
                    </div>
                </div>
                <div className="payscale">
                    <span>Payscale(£)</span>
                    <div>
                        <input type="range" min="100" max="1000"/>
                    </div>
                </div>
                <div className="country">
                    <span>Country</span>
                    <div>
                        <select name="country" id="">
                            <option value="india">India</option>
                            <option value="japan">Japan</option>
                            <option value="china">China</option>
                            <option value="bhutan">Bhutan</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="listings">
                <div>
                    <div>
                    <input type="text" className="search" placeholder="Search for Jobs"/>
                    <button>Search</button>
                    </div>
                    <div className="jobs">
                        <MusicLoader data={this.props.data}/>
                                    
                        {

                            this.props.data.map((val,ind)=>{

                                return(
                                    
                                    <div>
                                        <div>
                                        <span>{val.title}</span>
                                        <span>
                                            {/* {val.jobType.map((value,index)=>{
                                                return <span key={index}>{value}</span>
                                            })} */}
                                            <span>{val.title}</span>
                                        </span>
                                        <span>{val.id} $/hr</span>
                                        </div>
                                        <div>
                                        <span><i class="fa fa-building" aria-hidden="true"></i> {val.company_name}</span>
                                        <span><i class="fa fa-map-marker" aria-hidden="true"></i> {/*val.place*/}London</span>
                                        <span>{val.created_on}</span>
                                        </div>
                                        <span>{val.description}</span>
                                        <span>{/*val.tags.map((value,index)=>{
                                                return <span key={index}>{value}</span>
                                            })*/}
                                            <span>{val.type}</span>
                                        </span>
                                        <hr/>
                                    </div>
                                
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>      
      </div>
    )
  }
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

export default Listings
