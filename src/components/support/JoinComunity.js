import React from 'react'
import './Support.css'

const JoinComunity = () => {
  return (
    <div className='row'>
      <div className='col-md-4 ms-auto'>
        <div className='join-community primary-text-color'>
          <h3>Join the Community</h3>
          <p className='para'>Subscribe to get product updates in your inbox</p>
        </div>
        <div className='support subscribe'>
          <input
            type='email'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Enter email'
          />
          <small className='primary-text-color2 subtext'>
            We won’t send you spam, unsubscribe at any time
          </small>

          <button type='button' className='btn btn-primary'>
            subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinComunity
