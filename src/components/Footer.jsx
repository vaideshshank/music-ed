import React from 'react'
import FooterCss from '../stylesheets/Footer.module.css'

var Footer=()=>{
    return(
        <footer>
            <Connect/>
            <Links/>
            <Options/>
        </footer>
    )
}

const Connect=()=>{
    return(
        <div>
            Connect with us <br/><hr/>
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </div>
    )
}

const Links=()=>{
    let links=['about music:ed','cookies','privacy policy'];
    let tag=links.map((link,ind)=><span key={ind}>{link}</span>);
    return(
        <div className={FooterCss.flex2}>
            {tag}
        </div>
    )
}

const Options=()=>{
    return(
       <div>
            Join us <br/>
            <hr/>
            <span>SIGN IN</span>|
            <span>REGISTER</span>
        </div>
    )
}
export default Footer;