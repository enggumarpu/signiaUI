import React, { useState, useContext } from 'react';
import gmail from '../../assets/img/gmail.png'
import github from '../../assets/img/github.png'
import image10 from '../../assets/img/image10.png'
import { gql, useMutation, Mutation } from '@apollo/client'
import Signia from '../../assets/img/signia-logo.png'
import LoginLink from './LoginLink'
import './Login.css'
import { Link } from 'react-router-dom'
import Header from '../Header'
import { Grid, Typography } from '@material-ui/core';
import Footer from '../Footer'
import { useEffect } from 'react'
import history from '../../utils/history';
import Swal from 'sweetalert2'
import {AuthContext} from '../../DispatchContext';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");


  const useCont = useContext(AuthContext);

  const textHandler = (e) => {
    if (e.target.name == 'email') {
      setEmail(e.target.value)
      setEmailErr("")
    } else if (e.target.name == 'password') {
      setPassword(e.target.value)
      setPasswordErr("")
    }
  }
  const SIGN_IN = gql`
    mutation signIn($usersInput: SignInUsersInput!) {
      signIn(usersInput: $usersInput) {
        accessToken
        Firstname
        Lastname
        DOB
        Email
        ContactNo
        Address1
        Address2
        City
        id
        Country
        Image
        CreatedUserId
        CreatedDate
        UpdatedDate
      }
    }
  `
  const [createLink, { loading, error, data }] = useMutation(SIGN_IN, {
    variables: {
      usersInput: {
        Username: email,
        Password: password,
      },
    },
  })

  const SubmitHandler = async (e) => {
    e.preventDefault()
    if (email == "") {
      setEmailErr('Please enter Email');
    }
    if (password == "") {
      setPasswordErr('Please enter Password')
    }
    if (email && password) {
      useCont.userNamePassword({
        useremail: email,
        userpass: password
      });
      try{
        await createLink()
        }catch(e){
            Swal.fire({
                icon: 'error',
                title: 'Error ',
                html: 'Something went wrong',
              });
            // console.log(e.graphQLErrors[0].message.error,'eeeeeeeeeeee')
        }
    }
    // window.location.pathname = '/newlanding'
    // createLink();
  }
  useEffect(() => {
    if (data) {
      useCont.login(data.signIn.accessToken, data.signIn);
      history.push("/newlanding")
      // window.location.pathname = '/newlanding'
      console.log(data, 'dataaaaa')
    }
  }, [data])

  // const [mutate, loading, error, data] = useMutation(SIGN_IN)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  return (
    <>
      <Grid container>
        <Grid md={6}>
          <div className='header-logo'>
            <img src={Signia} />
          </div>
        </Grid>
        <Grid md={6}>
          <div className='btn-wrap'>
            <Link className='buttonadmin' to='/adminlogin'>
              {' '}
              Administrator Login{' '}
            </Link>
          </div>
        </Grid>
      </Grid>
      <div className='container-fluid'>
        <div className='row justify-content-center mb-50'>
          <div className='col-lg-4 col-md-6'>
            <form className='page-form login-page'>
              <div className='white-default text-center mb-50'>
                <h4 className='white-heading'>Welcome to Signia &trade;</h4>
                <h1 className='white-heading'>Advanced Industry Solutions</h1>
              </div>
              <div className='align-center'>
                <input
                  onChange={textHandler}
                  type='email'
                  value={email}
                  name='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='User ID / Email'
                />
              </div>
              <Typography
                className="errPadding"
                component="p"
                color="error"
                variant="body2"
              >
                {emailErr}
              </Typography>
              <br />
              <div className='align-center'>
                <input
                  onChange={textHandler}
                  placeholder='Password'
                  value={password}
                  name='password'
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <Typography
                className="errPadding"
                component="p"
                color="error"
                variant="body2"
              >
                {passwordErr}
              </Typography>
              <div className='form-group align-center'>
                <div className='login-button'>
                  {/* <LoginLink link={`/newlanding`} /> */}
                  <button
                    onClick={SubmitHandler}
                    className='btn login-btn btn-primary'
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>{' '}
            <br />
            <div className='buttons'>
              <a className='color-white' href='#'>
                Forgot Password?
              </a>
            </div>
            <div className='buttons'>
              <Link className='color-white' to='/signup'>
                Signup
              </Link>
            </div>
            <br />
            <br />
            <ul className='social-links'>
              <li>
                <a href='#' target='_blank'>
                  <img src={gmail} />
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <img src={github} />
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <img src={image10} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
