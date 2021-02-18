import React from "react";
import hackathon2 from '../../../assets/img/hackathon-2.jpg';

const FeaturedImage = () => {
    return (
        <div className="col-lg-3">
            <div className="card rounded-top rounded-bottom">
                <div className="events">
                    <img className=" rounded-top" src={hackathon2} />
                </div>
                <div className="card-body secondary-bg-color primary-text-color rounded-bottom">
                    <h3>Code Innovate</h3>
                    <p>
                        Hold a three-day hackfest at your company by letting us bring the Oracle Code experience to you.
                        </p>
                    <div className="d-flex justify-content-between align-items-center events-detail">
                        <small>5 days left</small>
                        <a href="#"><small>Join Now</small></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedImage;