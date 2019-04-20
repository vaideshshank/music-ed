import React, { Component } from 'react'
import HeaderCss from './../stylesheets/Header.module.css';
import logo from '../assets/images/logo3.png';
import {Link,NavLink} from 'react-router-dom';

class Header extends Component {
  
  render() {
    return (
      <div>
        <header className={HeaderCss.container}>
            <LogoPart />
            <Options/>
            <Navbar/>
        </header>
      </div>
    )
  }
}

const LogoPart=()=>{
    var homePage=(e)=>{
        e.preventDefault();
        window.location="/";
    }
    return (
        <div className={HeaderCss.flex1} onClick={homePage}>
            <img src={logo} alt="Music:ED" className={HeaderCss.image}/>
            <span className={HeaderCss.title}>music:ed
                <div>London</div>
            </span>
        </div>
    )
}

export const Options=()=>{
    return(
        <div>
            <span><Link to="signin">SIGN IN</Link></span>|
            <span><Link to="signup">REGISTER</Link></span>
        </div>
    )
}

const Navbar=()=>{
    const highlight=(e)=>{
        /*var clickedNode=e.target,
            childNodes=clickedNode.childNode;
        for(var i=0; i<9; i++){
            if(childNodes[i].style.color=="white"){
                childNodes[i].style.color="rgba(255,255,255,0.5)";
                break;
            }
        }
        e.target.style.color="white";*/
    }
    const nav=['news','channels','events','jobs','projects','local','directory','resource','magazine'];
    const navOptions=nav.map((opt,ind)=><span key={ind} onClick={highlight}><Link to={opt}>{opt}</Link></span>)
    return(
        <div className={HeaderCss.flex2}>
            {navOptions}
        </div>
    )
}

export default Header
