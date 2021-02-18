import React, { useState } from "react";

const FeaturedItems = ({featuredData, featuredContent}) => {
    const renderedItems = featuredData.map((item, index) => {
        const images = require.context('../../assets/img/', true);
        let staticImage = images(`./${item.src}`);
          return (
              
            <div key={index} className="col-lg-4 pd-btm-50 ">
            <div className="card rounded-top rounded-bottom">
                <div className="events">
                    <img className=" rounded-top" src={staticImage.default} />
                </div>
                <div className="card-body secondary-bg-color primary-text-color rounded-bottom">
                    <h3>{item.title}</h3>
                    <p>
                        {item.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center events-detail">
                        <small>{item.daysLeft}</small>
                        <a href="#"><small>{item.statusText}</small></a>
                    </div>
                </div>
            </div>
        </div>
          )
    });

    return (
        <>
        <div className="row">
            <div className="col-md-12 pl-50 primary-text-color">
                <div className="resource mt-50 mb-50">
                    <h1>{featuredContent.title}</h1>
                    <h3>{featuredContent.text}</h3>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                {renderedItems}                
            </div>
        </div>
        </>
    );
}

export default FeaturedItems;