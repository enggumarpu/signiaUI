import React from 'react'
import { Link } from 'react-router-dom'
import BackLink from './backLink/BackLink'
import { useQuery } from '@apollo/client'
import { GET_ALL_DEMO_VIDEOS } from './constants'
import './Video.css'
import Header from './Header'
import AvatarDummy from '../assets/img/avatar.png'
import LoginImage from '../assets/img/login-img.png'
import './DemoVideos.css'

const DemoVideos = () => {
  const { loading, error, data } = useQuery(GET_ALL_DEMO_VIDEOS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const logoutHandler = () => {
    window.location.pathname = '/'
  }
  return (
    <>
      <Header
        logoutText={'Logout'}
        onClickLogout={logoutHandler}
        name={'dummy name'}
        resource={'Resource'}
        support={'Support'}
        events={'Events'}
        imageTag={<img className='profile-user-image' src={LoginImage} />}
      />
      <div className='container-fluid'>
        <div className='row mt-50 mb-50'>
          <div className='col'>
            <div className='top-page-heading white-default'>
              <h1>Demo Videos</h1>
              <p>Showing how to configure and use the APIs</p>
            </div>
          </div>
          <div className='col-auto'>
            <div className='page-button5'>
              <BackLink link={`/newlanding`} />
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <div className='video-panel white-default'>
              <div className='embed-responsive embed-responsive-16by9'>
                {data.getAllDemoVideos.map((getAllDemoVideos) => {
                  return (
                    <div className='row mb-5' key={getAllDemoVideos.id}>
                      <div className='col-md-5'>
                        <iframe
                          className='embed2-responsive-item w-100'
                          src='https://www.youtube.com/embed/s7wmiS2mSXY'
                          allowfullscreen
                        >
                          {' '}
                        </iframe>
                      </div>
                      <div className='col-md'>
                        <h3> {getAllDemoVideos.Title} </h3>
                        <small>{getAllDemoVideos.TotalViews}</small>
                        <br />
                        <p>{getAllDemoVideos.Description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DemoVideos
