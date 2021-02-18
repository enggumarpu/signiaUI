import React from 'react';
import eventthumbnail1 from '../../assets/img/eventthumbnail1.png';
import undrawproud from '../../assets/img/undrawproud.png';
import undrawmobile from '../../assets/img/undrawmobile.png';
import illustration from '../../assets/img/illustration.png';
import LoginImage from '../../assets/img/login-img.png';
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../constants";
import { Link } from 'react-router-dom';
import Hackathon1 from "../../assets/img/hackathon-1.jpg";
import "./Landing.css";
import Header from '../Header';
import history from '../../utils/history';

const AdminLanding = () => {
    const { loading, error, data } = useQuery(GET_ALL_EVENTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const logoutHandler = () => {
        history.push("/adminlogin")
    }

    const openCreateEvent = () => {
        history.push("/createYourEvents")
    }

    const openDevBlogHandler = () => {
        history.push("/devblogs")
    }

    const openRevokeAPI = () =>{
        history.push("/publish")
    }

    return (
        <>
            <Header
                logoutText={"Logout"}
                onClickLogout={logoutHandler}
                name={"Admin name"}
                imageTag={<img className="profile-user-image" src={LoginImage} />}
            />
            <div className='container-fluid'>
                <div className='row mb-3'>
                    <div className='col'>
                        <div className='top-page-heading text-white'>
                            <h1>
                                Events <span>14 running</span>
                            </h1>
                        </div>
                    </div>
                    <div className='col-auto ms-auto'>
                        <button className="btn btn-primary" type="submit" onClick={openCreateEvent}>Create Event</button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        {data.getAllEvents.slice(0, 3).map((getAllEvents) => {
                            return (
                                <div className='alp row mb-3' key={getAllEvents.id}>

                                    <div className='admin-event-thumbnail col-md-3 col-xl-auto'>
                                        <img src={eventthumbnail1} alt='#' />
                                    </div>
                                    <div className='admin-event-body text-white col-md-9 col-xl-10'>
                                        <h5>
                                            {getAllEvents.Title}t <span>5 days left</span>{' '}
                                        </h5>
                                        <small>20 participants</small>
                                    </div>

                                </div>
                            )
                        })}
                        <button className='btn btn-primary' type='submit'>
                            Load More
          </button>
                    </div>
                    <div className='col-lg-6 text-end'>
                        <img src={undrawproud} alt='#' />
                    </div>
                </div>

                <div className='row blue-default custom-panel p-5 text-white mt-5'>
                    <div className='col-lg-4'>
                        <div className='alp-thumbnail'>
                            <img src={undrawmobile} alt='#' />
                        </div>
                    </div>
                    <div className='col-lg'>
                        <div className='alp-card h-100 d-flex align-items-start flex-column'>
                            <div className='alp-button'>
                                <button className='btn btn-primary mb-50 float-end' onClick={openDevBlogHandler}>
                                    Developers blog
              </button>
                            </div>
                            <div className='alp-body'>
                                <h1>220 Developers are registered</h1>
                                <span>120 active</span>
                                <span>100 non active</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mt-50'>
                    <div className='col-lg-8'>
                        <div className='top-page-heading text-white'>
                            <h1 className='mb-25'>
                                500 APIs are registered{' '}
                                <span>354 APIs are used by 129 developers</span>
                            </h1>
                        </div>
                        <div className='alp row mb-3'>
                            <a href='#'>
                                <div className='alp-body text-white'>
                                    <h5>
                                        Accelerated Mobile Pages (AMP) URL API{' '}
                                        <span>5 days left</span>{' '}
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div className='alp row mb-3'>
                            <a href='#'>
                                <div className='alp-body text-white'>
                                    <h5>
                                        Amet minim mollit non deserunt{' '}
                                        <span>Used by 29 developers</span>{' '}
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div className='alp row mb-3'>
                            <a href='#'>
                                <div className='alp-body text-white'>
                                    <h5>
                                        Amet minim mollit non deserunt{' '}
                                        <span>Used by 29 developers</span>{' '}
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <button className='btn btn-primary' type='submit'>
                            Load More
          </button>
                    </div>
                    <div className='col-lg-4 text-end'>
                        <div className='alp-button'>
                            <button className='btn btn-primary ' onClick={openRevokeAPI}>
                                Revoke APIs
                            </button>
                        </div>
                        <div className='alp-thumbnail'>
                            <img src={illustration} alt='#' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminLanding;