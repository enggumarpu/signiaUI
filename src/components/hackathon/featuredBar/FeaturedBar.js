import React from "react";
import FeaturedImage from "./FeaturedImage";
import FeaturedList from "./FeaturedList";

const FeaturedBar = () => {
    return (
        <div className="row primary-bg-color primary-text-color pd-50 schedule-panel" >
            <FeaturedImage />
            <FeaturedList />
        </div>
    )
}

export default FeaturedBar;