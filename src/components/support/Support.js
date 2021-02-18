import React, { useContext } from 'react'
import BackLink from '../backLink/BackLink'
import SupportForm from './SupportForm'
import JoinComunity from './JoinComunity'
import Header from '../Header'
import LoginImage from '../../assets/img/login-img.png'
import './Support.css'
import { AuthContext } from '../../DispatchContext';
const Support = () => {

  const { logoutUser } = useContext(AuthContext);

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
        <div className='row'>
          <div className='col'>
            <div className='support primary-text-color'>
              <h1>Support</h1>
              <h3>How can we help you?</h3>
            </div>
          </div>
          <div className='col-auto ms-auto'>
            <BackLink link={`/newlanding`} />
          </div>
        </div>
        <div className='row mt-50'>
          <SupportForm />
        </div>
        <JoinComunity />
      </div>
    </>
  )
}

export default Support
