import React, { useState, useContext} from "react";
import hackathon from "../../assets/img/hackathon.png";
import hackathon2 from "../../assets/img/hackathon-2.jpg";
import date from "../../assets/img/date.png";
import developer from "../../assets/img/developer-img.png";
import schedule from "../../assets/img/schedule.png";
import EventTabs from "./EventTabs";
import CommonBanner from "../shared/CommonBanner";
import FeaturedItems from "../landing/FeaturedItems";
import Modal from "react-modal";
import {
  featuredContent,
  featuredData,
  panelItems,
} from "../../data/DataService";
import "./event.css";
import Header from "../Header";
import AvatarDummy from "../../assets/img/avatar.png";
import LoginImage from "../../assets/img/login-img.png";
import {AuthContext} from '../../DispatchContext';

const UpComingEvent = () => {
  const {logoutUser} = useContext(AuthContext);
  const [modelIsOpen, setModelIsOpen] = useState(false);

  const userDetails = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'));
  console.log('upcoming event', token)

  // const logoutHandler = () => {
  //   window.location.pathname = "/";
  // };
  const logoutHandler = () => {
    logoutUser();
    window.location.pathname = "/";
  };
  const modelOpen = () => {
    if(token){
      setModelIsOpen(true);
    }
    
  }
  return (
    <>
      <Header
        logoutText={"Logout"}
        onClickLogout={logoutHandler}
        name={"dummy name"}
        resource={"Resource"}
        support={"Support"}
        events={"Events"}
        imageTag={<img className="profile-user-image" src={LoginImage} />}
      />
      <div>
        <div className="container-fluid">
          <CommonBanner
            heading1="Code Innovate Challenge"
            heading3="Code, learn and win exciting prizes. Next level opportunity for code innovators"
            para="Faster and Safer Application Deployments on Kubernetes with Shipa and Oracle Kubernetes Engine (OKE)"
            imgsrc={hackathon}
            btname="Learn More"
          />
        </div>
        <div className="row blue-default heading-font pd-50 schedule-panel g-0">
          <div className="col-lg-3 event-panel">
            <div className="card events rounded-top rounded-bottom">
              <img className="rounded-top" src={hackathon2} />
              <div className="card-body dark-blue-default heading-font rounded-bottom">
                <h2>Code Innovate</h2>
                <p className="text-medium">
                  Hold a three-day hackfest at your company by letting us bring
                  the Oracle Code experience to you.
                </p>
                <div className="d-flex justify-content-between align-items-center events-detail">
                  <small>5 days left</small>
                  <a href="#" className="text-medium">
                    Join Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="hackathon-schedule heading-font">
              <div className="hackathon-list">
                <img src={date} alt="#" />
                <p>January 12, 2021</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 align-self-center">
            <div className="hackathon-schedule heading-font">
              <div className="hackathon-list">
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target=".bd-example-modal-xl"
                  onClick={() => setModelIsOpen(true)}
                >
                  Registered Now
                </button> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target=".bd-example-modal-xl"
                  onClick={setModelIsOpen}
                >
                  Registered Now
                </button>
                <Modal
                  isOpen={modelIsOpen}
                  shouldCloseOnOverlayClick={false}
                  onRequestClose={() => setModelIsOpen(true)}
                >
                  <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="registeration-profile">
                            <div className="developer-profile blue-default pd-50 justify-content-center text-center">
                              <img alt="#" src={developer} />
                              <div className="text-center">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Upload Image
                                </button>
                              </div>
                            </div>
                            <div className="profile-body text-center">
                              <p>
                                Registration Date{" "}
                                <span className="text-right">
                                  30, January 2020
                                </span>
                              </p>
                              <button
                                className="btn btn-primary-fill"
                                type="submit"
                              >
                                Edit Password
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-7">
                          <form className="registeration-form page-form">
                            <h2 className="text-primary">Personal Information</h2>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control input-color"
                                id="formGroupExampleInput"
                                placeholder="Name"
                                defaultValue={token ? userDetails.Firstname : null}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control input-color"
                                id="formGroupExampleInput"
                                placeholder="Date of Birth"
                              />
                            </div>

                            <h2 className="text-primary mt-25">
                              Contact Information
                            </h2>

                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control input-color"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                defaultValue={token ? userDetails.Email : null}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="tel"
                                className="form-control input-color"
                                id="phone"
                                name="phone"
                                placeholder="Contact No"
                                defaultValue= {token ? userDetails.ContactNo : null}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control input-color"
                                id="formGroupExampleInput"
                                placeholder="Address Line 1"
                                defaultValue= {token ? userDetails.Address1 : null}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control input-color"
                                id="formGroupExampleInput"
                                placeholder="Address Line 2"
                                defaultValue= {token ? userDetails.Address2 : null}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control input-color"
                                id="formGroupExampleInput"
                                placeholder="City"
                                defaultValue= {token ? userDetails.City : null}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control input-color"
                                id="formGroupExampleInput"
                                placeholder="Country"
                                defaultValue= {token ? userDetails.Country : null}
                              />
                            </div>
                            <div className="form-group d-flex justify-content-between mt-4">
                              <button
                                className="btn btn-secondary"
                                type="submit"
                              >
                                Confirm
                              </button>
                              <button
                                className="btn btn-primary-fill"
                                type="submit"
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="hackathon-schedule heading-font">
              <div className="hackathon-list">
                <img src={schedule} alt="#" />
                <p>11:59pm EST</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 offset-md-4">
              <EventTabs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComingEvent;
