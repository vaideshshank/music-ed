import React, { Component } from 'react'
import HeaderCss from './../stylesheets/Header.module.css';
import logo from '../assets/images/logo3.png';
import logo2 from '../assets/images/Logo-MusicED.png';
import {Link,NavLink} from 'react-router-dom';

class Header extends Component {
  showMenu(e){
    var menuStyle=document.querySelectorAll(".mobileMenu")[0].style;
    var menu=e.target;
    if(menu.className=="fa fa-bars"){
        menu.className="fa fa-close";
        menu.style.transform="rotate(+180deg)";
        menu.style.fontSize="8vw";    
    }else if(menu.className=="fa fa-close"){
        menu.style.transform="rotate(-180deg)";
        menu.className="fa fa-bars";
        menu.style.fontSize="5vw";  
    }
    menu.style.transition="transform 0.2s ease-in-out, font-size 0.2s ease-in-out";;
    
    if(menuStyle.display=="block"){
        menuStyle.display="none";
    }
    else{
        menuStyle.display="block";
    }
  }
  

  render() {
      return (
      <div>
        <header className={HeaderCss.container}>
            <LogoPart logo={logo}/>
            <Options/>
            <Navbar menu={this.showMenu}/>
        </header>
        <header className={HeaderCss.container2}>
            <div>
                <i className="fa fa-bars" aria-hidden="true" onClick={this.showMenu}></i>
                <LogoPart logo={logo2}/>
            </div>
            <MobileNav/>
        </header>
       
      </div>
    )
  }
}

const MobileNav=(props)=>{
    const nav2=['news','channels','events','jobs','projects','local','directory','resource','magazine'];
    const navOptions2=nav2.map((opt,ind)=><div key={ind}><Link to={opt}>{opt}</Link></div>)
    return (
        <div className="mobileMenu">{navOptions2}</div>
    )
}

const LogoPart=(props)=>{
    var homePage=(e)=>{
        e.preventDefault();
        window.location="/";
    }
    return (
        <div className={HeaderCss.flex1} onClick={homePage}>
            <img src={props.logo} alt="Music:ED" className={HeaderCss.image}/>
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

const Navbar=(props)=>{
    
    const nav=['news','channels','events','jobs','projects','local','directory','resource','magazine'];
    const navOptions=nav.map((opt,ind)=><span key={ind} onClick={props.menu}><Link to={opt} onClick={props.menu}>{opt}</Link></span>)
    return(
        <div className={HeaderCss.flex2}>
            {navOptions}
        </div>
    )
}

export default Header
