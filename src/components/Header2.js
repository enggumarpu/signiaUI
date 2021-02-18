import React, { Component } from "react";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import Signia from '../assets/img/signia-logo.png';
import LoginImage from '../assets/img/login-img.png';
import { extend } from "jquery";
import { Grid } from "@material-ui/core";

class  Header2 extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          isLoggedIn : false
    //     }
    // }
    render () {
  return (
    <div className="primary-bg-color navbar shadow-sm nav-header">
        <Grid container>
    <Grid md={6} className="nav-logo pl-50">
        <a href="#" className="navbar-brand">
            <img src={Signia} alt="signia-logo" />
        </a>
    </Grid>
    
    <Grid md={6} className=" singin nav-user pr-50">
        <Link style={{color:'white'}} color='textPrimary'  to="/">
           Login
        </Link>
    </Grid>
    </Grid>
</div> )
}
}

export default Header2;