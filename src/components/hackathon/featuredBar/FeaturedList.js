import React from 'react'
import { FeaturedListData } from '../../../data/DataService'

const FeaturedList = () => {
  const renderedItems = FeaturedListData.map((item, index) => {
    const imagesItems = require.context('../../../assets/img/', true)
    let staticImage = item.src ? imagesItems(`./${item.src}`) : null
    return (
      <div key={index} className='col-lg-3'>
        <div className='hackathon-schedule primary-text-color'>
          <div className='hackathon-list'>
            {item.src ? (
              <>
                <img src={staticImage.default} alt='date' />
                <p>{item.text}</p>
              </>
            ) : (
              <button type='button' className='btn btn-primary'>
                {item.text}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  })

  return <>{renderedItems}</>
}

export default FeaturedList
