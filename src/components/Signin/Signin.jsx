import React, { Component } from 'react'
import ThemeImage from '../../assets/images/disk.png';
import '../../stylesheets/Signin/Signin.css';


export default class Signin extends Component {

  render() {
    return (
      <div className="signin">
        <img src={ThemeImage}/>
        <div className="signinForm">
            <span>Welcome Back!</span>
            <form>
                Password <span>*</span><br/>
                <input type="password"/><br/>  
                <button>Sign in</button>    
            </form>
        </div>
      </div>
    )
  }
}
