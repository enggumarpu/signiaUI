import React from "react";
import hackathon from '../../assets/img/hackathon.png';
import CommonBanner from "../shared/CommonBanner";
const Hackathon = () => {
    return (
        <div className='container-fluid'>
            <CommonBanner 
                heading1 = 'Code Innovate Challenge'
            heading3 =  'Code, learn and win exciting prizes. Next level opportunity for code innovators'
            para = "Faster and Safer Application Deployments on Kubernetes with Shipa and Oracle Kubernetes Engine (OKE)"
            imgsrc = {hackathon}
        />
        </div>
    )
}
export default Hackathon;