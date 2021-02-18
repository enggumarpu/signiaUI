import React from 'react';

const EventItems = ({ eventData }) => {
    const renderedItems = eventData.map((item, index) => {
        const imagesContext = require.context('../../assets/img/', true);
        let staticImage = imagesContext(`./${item.src}`);
        return (
            <div key={index} className="events-panel primary-text-color">
                <div className="event-thumbnail">
                    <img src={staticImage.default} alt="thumbnail" />
                </div>
                <div className="event-detail primary-text-color">
                    <h3>{item.title}</h3>
                    <small>{item.daysLeft}</small>
                    <p>{item.description}</p>
                    <a href="#" className="primary-text-color">{item.statusText}</a>
                </div>
            </div>


        )
    });

    return (
        <div className="col-md-6 pr-50 mt-150">
            {renderedItems}
        </div>
    );
};

export default EventItems;
