import React from 'react';

function API(props) {
    return (
        <div>
            <a href= {props.item.url} > {props.item.title}</a>
        </div>
    )
}

export default API;