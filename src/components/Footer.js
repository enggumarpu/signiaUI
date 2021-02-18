import React from "react";
import facebook from '../assets/img/facebook.png';

const Footer = () => {
    return (
        <div className = 'footer'>
        <div className="primary-bg-color primary-text-color footer-position">
        <span className="left pl-50">Region: US/Canada</span>
        <span>Copyright, 2021, Advanced Signia Technologies Inc.</span>
        <span className="right pr-50"><a href="#"><img src={facebook} /></a></span>
        </div>

    </div>
    );
}

export default Footer;