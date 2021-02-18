import React, {useContext} from 'react'
import CommonBanner from '../shared/CommonBanner'
import DrImage from '../../assets/img/drc-img.png'
import Movie from '../../assets/img/movie.png'
import Handyman from '../../assets/img/handyman.png'
import Explore from '../../assets/img/explore.png'
import Hackathon1 from '../../assets/img/hackathon-1.jpg'
import Hackathon2 from '../../assets/img/hackathon-2.jpg'
import Hackathon3 from '../../assets/img/hackathon-3.jpg'
import LoginImage from '../../assets/img/login-img.png'
import { Link } from 'react-router-dom'
import './Landing.css'
import Header from '../Header'
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../constants";
import history from '../../utils/history';
import {AuthContext} from '../../DispatchContext';

const NewLanding = () => {

  const {logoutUser} =  useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

      
      const userDetails = JSON.parse(localStorage.getItem('user'));
      const token = JSON.parse(localStorage.getItem('token'));


  const logoutHandler = () => {
    logoutUser();
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
        imageTag={<img className='profile-user-image' src={LoginImage} alt = "ProfileImage"/>}
      />
      
      <div className='container-fluid'>
        <CommonBanner
          heading1='Developer Resource Center'
          heading3='Learn more about building applications with us'
          para='Signia allows you to use our published APIs for your applications and use our test bed. This platform provides complete knowledge and documentation for all resources'
          imgsrc={DrImage}
          btname={'Learn more'}
        />
        <div className='row land blue-default white-default pd-50'>
          <div className='col-lg-3'>
            <div className='process-heading'>
              <h1 className='color-white'>
                Build Applications
                <br />
                using Signia
              </h1>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='process-list'>
              <img src={Movie} alt='#' />
              <h3>Watch</h3>
              <p>Watch how to deploy and configure APIs in your application</p>
              <Link to='/demovideos'>Watch Demo Videos</Link>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='process-list'>
              <img src={Handyman} alt='#' />
              <h3>Build</h3>
              <p>Build you application using Signia APIs with ease</p>
              <Link to='/apiguide'>Build your first app</Link>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='process-list'>
              <img src={Explore} alt='#' />
              <h3>Explore</h3>
              <p>Dive deeper on Signia API platform to match your needs</p>
              <Link to='/searchapi'>Search APIs & Documents</Link>
            </div>
          </div>
        </div>
        <div className='row mt-50 mb-50'>
          <div className='col-lg-12'>
            <div className='top-page-heading white-default'>
              <h1>Developer Community and Events</h1>
              <p>See whats new and whats coming in for you to participate</p>
            </div>
          </div>
        </div>
       
        <div className='row justify-content-center' >
          <div className='col-xl-8 col-lg-10 col-12'>
            <div className='row mb-50'>
            {data.getAllEvents.slice(0,3).map((getAllEvents) => {
          return (
              <div className='col-lg-4' key = {getAllEvents.id}>
                <div className='card custom-card h-100'>
                  <img class='card-img-top' src={Hackathon2} />

                  <div className='card-body'>
                    <h2>{getAllEvents.Title}</h2>
                    <p>
                    {getAllEvents.Discription}
                    </p>
                  </div>
                  <div className='card-footer d-flex justify-content-between align-items-center events-detail text-white border-0'>
                    <small>5 days left</small>
                    <Link to='/upcomingevent'>Join Now</Link>
                  </div>
                </div>
              </div>
             
              )})}
            </div>
          </div>
        </div>
         
        <div className='row mb-5'>
          <div className='col-lg-3 align-self-center'>
            <Link to='/community' className='text-white process-heading'>
              Whats new in Community
            </Link>
          </div>
          <div className='col-lg-4'>
            <div className='lightBlue-panel'>
              Build low code apps with Signia APIs - Pros and Cons
            </div>
          </div>
          <div className='col-lg-5 pr-50'>
            <div className='lightBlue-panel'>
              Announcing breakthrough MySQL innovation in the cloud
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLanding
