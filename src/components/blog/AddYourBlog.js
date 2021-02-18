import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './blog.css'
import { useMutation } from '@apollo/client'
import { BLOGS_TODOS } from '../constants'
import Header from '../Header'
import BackLink from '../backLink/BackLink'
import LoginImage from '../../assets/img/login-img.png';
import history from '../../utils/history'
import Swal from 'sweetalert2'
import { Typography } from '@material-ui/core'
import { useStyles } from './styles';

const AddYourBlog = () => {
  const classes = useStyles();

  const [formState, setFormData] = useState({
    title: '',
    message: '',
    dateEntered: false,
  })
  const [titleErr, setTitleErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const [createLink, { loading, error, data }] = useMutation(BLOGS_TODOS, {
    variables: {
      createBlogInput: {
        Title: formState.title,
        Message: formState.message,
      },
      //onCompleted: () => history.push('/events')
    },
  })


  const submitForm = async (e) => {
    e.preventDefault()
    //validation takes place here.
    if (formState.message == "") {
      setMessageErr("Please enter message")
    }
    if (formState.title == "") {
      setTitleErr("Please enter title")
    }
    setFormData({
      dateEntered: true,
    })
    if(formState.title && formState.message){
      try{
        await createLink()
      }catch(e){
        Swal.fire({
          icon: 'error',
          title: 'Error ',
          html: 'Something went wrong',
      });
      }
    }
  }
  useEffect(() => {
    if (data) {
        Swal.fire({
            icon: 'success',
            title: 'Success ',
            html: 'Blog Created',
        });
        setFormData({
          title: '',
          message: '',
          dateEntered: true,
        })
    }
}, [data])

  const logoutHandler = () => {
    history.push("/")
  }
  if (loading) return 'data is loading worth a wait'
  if (error) return <p>An error occurred</p>
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
        <div className='row mt-50 mb-50'>
          <div className='col'>
            <div className='top-page-heading white-default'>
              <h1>Add your blog</h1>
            </div>
          </div>
          <div className='col-auto ms-auto'>
            <div>
              <BackLink link='/newlanding'>Back</BackLink>
            </div>
          </div>
        </div>
        <form className='page-form add-blog mb-5'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 align-self-end'>
              <div className='form-group'>
                <div className='row'>
                  <div className='col-md col-12'>
                    <input
                      // type='email'
                      className='form-control'
                      id='exampleFormControlInput1'
                      placeholder='Title'
                      value={formState.title}
                      onChange={(e) => {
                        setFormData({
                          ...formState,
                          title: e.target.value.trim(),
                        })
                        setTitleErr("")
                      }}
                    />
                     <Typography
                        className={classes.errPaddingFields}
                        component="p"
                        color="error"
                        variant="body2"
                    >
                        {titleErr}
                    </Typography>
                    {/* <input type="text" className="form-control" id="fname" name="fname" placeholder="Title" /> */}
                  </div>
                  <div className='col-md-auto col-12 text-end'>
                    <button className='btn btn-primary' type='submit'>
                      Upload Media
                    </button>
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  placeholder='Go ahead... we’re listening!!'
                  rows='12'
                  value={formState.message}
                  onChange={(e) => {
                    setFormData({
                      ...formState,
                      message: e.target.value,
                    })
                    setMessageErr("")
                  }}
                ></textarea>
                 <Typography
                    className={classes.errPaddingFields}
                    component="p"
                    color="error"
                    variant="body2"
                >
                    {messageErr}
                </Typography>
                {/* <textarea className="form-control2" id="exampleTextarea"rows="4" placeholder="Go ahead... we’re listening!!"></textarea> */}
              </div>
              <div className='form-group mt-50 text-end'>
                <button
                  className='btn btn-secondary'
                  onClick={submitForm}
                  type='submit'
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddYourBlog
