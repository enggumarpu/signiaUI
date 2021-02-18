import React, { useState } from "react";
import history from "../../utils/history";
import LoginImage from '../../assets/img/login-img.png';
import Header from "../Header";
import { useStyles } from './styles';
import "./event.css";
import { Input, InputAdornment } from "@material-ui/core";
const CreateEvents = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [judgePostition, setJudgePosition] = useState("");
  const [eventType, setEventType] = useState("");
  const [event, setEvent] = useState("");
  const [developer, setDeveloper] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const classes = useStyles();

  const logoutHandler = ()=>{
    history.push("/adminlogin")
  }

  const backHandler = () =>{
      history.push("/adminlanding")
  }

  const textHandler = (e) => {
    if(e.target.name == "title"){
        setTitle(e.target.value);
        setTitleErr("")
    }
    if(e.target.name == "description"){
      setDescription(e.target.value);
      // setDescErr("")
  }
  }
  return (
    <>
    <Header
        logoutText={"Logout"}
        onClickLogout={logoutHandler}
        name={"Admin name"}
        imageTag={<img className="profile-user-image" src={LoginImage}/>}
    />
    <div className='container-fluid text-white pb-5'>
      <div className='row mt-50 mb-50'>
        <div className='col'>
          <div className='top-page-heading white-default'>
            <h1>Create your event</h1>
          </div>
        </div>
        <div className='col-auto'>
          <div className='page-button'>
            <button
              className="btn btn-primary button-transparent"
              // type="submit"
              onClick={backHandler}
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className='row mb-50 justify-content-center'>
        <div className='col-lg-8'>
          <form className='page-form dev-form'>
            <h2 className='white-default'>Event information</h2>
            <div className='row'>
              <div className='col-sm-7 col-md-8 col-xl-9'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='formGroupExampleInput'
                    placeholder='Title'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    rows='12'
                    id='exampleTextarea'
                    placeholder='Event description'
                  ></textarea>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='formGroupExampleInput'
                    placeholder='Event end date'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='formGroupExampleInput'
                    placeholder='Event end time'
                  />
                </div>
              </div>

              <div className='col-sm-5 col-md-4 col-xl-3 text-end ps-xl-0'>
                <button
                  className='btn btn-primary'
                  type='submit'
                >
                  Upload Media
                </button>
              </div>
            </div>
          </form>

          <form className='page-form dev-form'>
            <h2 className='white-default mt-25'>Judges detail</h2>

            <div className='row'>
              <div className='col-sm-7 col-md-8 col-xl-9'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='formGroupExampleInput'
                    placeholder='Judge name'
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='formGroupExampleInput'
                    placeholder='Oraganization & position'
                  />
                </div>
                <div className='text-end'>
                  <button
                    className='btn btn-primary'
                    type='submit'
                  >
                    Add another judge
                  </button>
                </div>
              </div>
              <div className='col-sm-5 col-md-4 col-xl-3 text-end ps-xl-0'>
                <button
                  className='btn btn-primary'
                  type='submit'
                >
                  Add Photo
                </button>
              </div>
            </div>
          </form>

          <form className='page-form dev-form'>
            <h2 className='white-default mt-25'>Event type</h2>
            <p className='white-default'>
              If Event type is closed then admin should invite the specific
              developers to the event
            </p>
            <div className='form-check-inline radio-button mb-25'>
            <label class="container">One
              <input type="radio" checked="checked" name="radio"/>
              <span class="checkmark"></span>
            </label>
            </div>
            <div className='form-check-inline radio-button mb-25'>
            <label class="container">Two
              <input type="radio" name="radio"/>
              <span class="checkmark"></span>
            </label>
            </div>
            <div className='row'>
              <div className='col-sm-7 col-md-8 col-xl-9'>
                <div className='dropdown form-group'>
                <select className="round">
                    <option value="" disabled>Select developer</option>
                    <option value="1">Dev 1</option>
                    <option value="2">Dev 2</option>
                    <option value="3">Dev 3</option>
                  </select>
                </div>
              </div>
              <div className='col-sm-5 col-md-4 col-xl-3 text-end ps-xl-0'>
                <button
                  className='btn btn-primary'
                  type='submit'
                >
                  Add another Dev
                </button>
              </div>
            </div>

            <p className='white-default'>
              Select event to send invite to developers{' '}
            </p>
            <div className='row'>
              <div className='col-sm-7 col-md-8 col-xl-9'>
                <div className='dropdown form-group'>
                <select className="round">
                    <option value="" disabled>Select Event</option>
                    <option value="1">Event 1</option>
                    <option value="2">Event 2</option>
                    <option value="3">Event 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-7 col-md-8 col-xl-9'>
                <div className='dropdown form-group'>
                  <select className="round">
                    <option value="" disabled>Select developer</option>
                    <option value="1">Dev 1</option>
                    <option value="2">Dev 2</option>
                    <option value="3">Dev 3</option>
                  </select>
                </div>
              </div>
              <div className='col-sm-5 col-md-4 col-xl-3 text-end ps-xl-0'>
                <button
                  className='btn btn-primary'
                  type='submit'
                >
                  Add another Dev
                </button>
              </div>
            </div>

            <div className='text-end'>
              <button
                className='btn btn-primary button-filled mt-25'
                type='submit'
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateEvents
