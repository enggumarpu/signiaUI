import React from 'react'
import image15 from '../assets/img/image15.png'
import image16 from '../assets/img/image16.png'
import image17 from '../assets/img/image17.png'
import image18 from '../assets/img/image18.png'
import { Link } from 'react-router-dom'
import Header from './Header'
import {useQuery} from '@apollo/client';
import { GET_ALL_BLOGS } from './constants';
import LoginImage from '../assets/img/login-img.png'
const Community = () => {

  const logoutHandler = () => {
    window.location.pathname = '/'
  }
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
      
  return (
    <>
      <Header
        logoutText={'Logout'}
        onClickLogout={logoutHandler}
        name={'dummy name'}
        resource={'Resource'}
        support={'Support'}
        events={'Events'}
        imageTag={<img className='profile-user-image' src={LoginImage} alt = "ProfileImage"/>}
      />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-10'>
            <div className='top-page-heading heading-font'>
              <h1>Developer’s Community</h1>
              <p>
                Join the Signia’s Developer Community. Share your expertise,
                discover new solutions, grow your network. Whether you code in
                Java, Open Source, or build on the Cloud, you will find fellow
                enthusiasts here.
              </p>
            </div>
          </div>
          <div className='col-lg-2 text-end'>
            <Link className='btn btn-primary' to='/addyourblog'>
              Add Your Blog
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-9 col-lg-8'>
            <div className='row community-panel mb-3'>
              <div className='col-md-5 community-image'>
                <img className='rounded-corners w-100' src={image15} />
              </div>
              <div className='col-md-7 community-text heading-font'>
                <div className='d-flex flex-column h-100'>
                  <div className='mb-auto'>
                    <h2>Diversity, Inclusion and Community Outreach</h2>
                    <p className='text-medium'>
                      Join the Signia’s Developer Community. Share your
                      expertise, discover new solutions, grow your network.
                      Whether you code in Java, Open Source, or build on the
                      Cloud, you will find fellow enthusiasts here.
                    </p>
                  </div>
                  <div className='text-end w-100'>
                    <button type='button' className='btn btn-primary'>
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-xl-3'>
          {data.getAllBlogs.slice(0,3).map( getAllBlogs => {
                return (

            <div className='row community-panel mb-3' key={getAllBlogs.id}>
              <div className='col-lg-5 col-sm-5 community-image'>
                <img className='rounded-corners w-100' src={image16} alt='#' />
              </div>
              <div className='col-lg-7 col-sm-7 community-text heading-font'>
                <h3>{getAllBlogs.Title}</h3>
                <p className='text-xs-small'>
                {getAllBlogs.Message}
                </p>
              </div>
            </div>
                )})}
                </div>
        </div>

        {data.getAllBlogs.slice(0,1).map( getAllBlogs => {

            return (
        <div className='row'>
          <div className='col-lg-6 heading-font'>
            <div className='blog'>
              <h2>Latest from the Developer’s Blogs</h2>
              <div className='blog-list'>
                <small className='d-block'>{getAllBlogs.CreatedDate}</small>
                <h3>{getAllBlogs.Title}</h3>
                <span>Kuassi Mensah</span>
                <p className='text-xs-small'>
                {getAllBlogs.Message}
                </p>
                <a href='#' className='mt-50 text-white'>
                  Read the full post
                </a>
              </div>
            </div>
          </div>
                
          <div className='col-lg-6'>
            <div className='news-panel blue-default'>
              <div className='news'>
                <h2>{getAllBlogs.Title}</h2>
              </div>
              <div className='news-list'>
                <small className='d-block'>{getAllBlogs.CreatedDate}</small>
                <a href='#' className='text-white'>
                {getAllBlogs.Message}
                </a>
              </div>
              {/* <div className='news-list'>
                <small className='d-block'>DECEMBER 4, 2020</small>
                <a href='#' className='text-white'>
                  Using Resource Manager solution templates
                </a>
              </div>
              <div className='news-list'>
                <small className='d-block'>DECEMBER 4, 2020</small>
                <a href='#' className='text-white'>
                  Launching Your Own Free Private VPN In The Oracle Cloud
                </a>
              </div> */}
              <div className='text-end'>
                <a href='' className='link'>
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
            )})}
      </div>

    </>
  )
}

export default Community
