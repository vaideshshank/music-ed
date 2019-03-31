import React, { Component } from 'react'
import HeaderCss from './../stylesheets/Header.module.css';
import logo from '../assets/images/Logo-MusicED.png';

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
    return (
        <div className={HeaderCss.flex1}>
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
            <span>SIGN IN</span>|
            <span>REGISTER</span>
        </div>
    )
}

const Navbar=()=>{
    const nav=['news','channels','events','jobs','projects','local','directory','resource','magazine'];
    const navOptions=nav.map((opt,ind)=><span key={ind}>{opt}</span>)
    return(
        <div className={HeaderCss.flex2}>
            {navOptions}
        </div>
    )
}

export default Header
