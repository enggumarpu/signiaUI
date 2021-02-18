import React from 'react'

const CommonBanner = (props) => {
  return (
    <div className='row mb-3'>
      <div className='col-xl-6 col-lg-7 col-md-8'>
        <div className='primary-text-color'>
          <h1>{props.heading1}</h1>
          <h3>{props.heading3}</h3>
          <p>{props.para}</p>
          <button type='button' className='btn btn-primary'>
            {props.btname}
          </button>
        </div>
      </div>
      <div className='col-xl-2 col-lg-3 col-md-4 ms-auto'>
        <img src={props.imgsrc} alt='images' className='w-100' />
      </div>
    </div>
  )
}

export default CommonBanner
