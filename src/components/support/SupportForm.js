import React, { useEffect ,useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useHistory } from 'react-router'
import Swal from "sweetalert2";
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const SupportForm = () => {


  const [emailErr, setEmailErr] = useState("");
    const [contactErr, setContactErr] = useState("");
    const [messageErr, setMessageErr] = useState("");
    const classes = useStyles();

  const CONCTACTUS_TODOS = gql`
    mutation createContactUs($createContactUsInput: CreateContactUsInput!) {
      createContactUs(createContactUsInput: $createContactUsInput) {
        Email
      }
    }
  `
  const [formState, setFormData] = useState({
    email: '',
    contactnumber: '',
    message: '',
    dateEntered: false,
  })

  const [createLink, { loading, error, data }] = useMutation(CONCTACTUS_TODOS, {
    variables: {
      createContactUsInput: {
        Email: formState.email,
        ContactNumber: formState.contactnumber,
        Message: formState.message,
      },
      //onCompleted: () => history.push('/events')
    },
  })
  // if (loading) return 'data is loading worth a wait'
  // if (error) return <p>An error occurred</p>

  // const submitForm = (e) => {
  //   e.preventDefault()
  //   //validation takes place here.
  //   setFormData({
  //     dateEntered: true,
  //   })
  //   createLink()
  // }

  const submitForm = async (e) => {
    e.preventDefault();
    if (formState.email == "") {
        setEmailErr("Please enter email")
    }
    if (formState.contactnumber == "") {
        setContactErr("Please enter contact number")
    }
    if (formState.message == "") {
        setMessageErr("Please enter message")
    }
    if (formState.email && formState.contactnumber && formState.message) {
        try {
            await createLink();
        } catch (e) {
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
            html: 'Thanks for contact us',
        });
        setFormData({
            email: '',
            contactnumber: '',
            message: '',
            dateEntered: true
        })
    }
}, [data])

  return (
    <div className='col-md-8 ms-auto'>
      {/* { dateEntered &&  setTimeout(() => {<h2>Data Entered</h2>}, 1000)} */}
      <div className='row'>
        <div className='col-lg-8'>
          <div className='support support-form'>
            <input
              type='email'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='email@domain.com'
              value={formState.email}
              onChange={(e) => {
                setFormData({
                  ...formState,
                  email: e.target.value.trim(),
                })
                setEmailErr("")
              }}
            />
            <Typography
                    className={classes.errPaddingFields}
                    component="p"
                    color="error"
                    variant="body2"
                >
                    {emailErr}
                </Typography>
            <input
              type='tel'
              className='form-control'
              id='phone'
              name='phone'
              placeholder='+1 667 (345) 9897'
              pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
              required
              value={formState.contactnumber}
              onChange={(e) => {
                setFormData({
                  ...formState,
                  contactnumber: e.target.value.trim(),
                })
                setContactErr("")
              }}
            />
            <Typography
                    className={classes.errPaddingFields}
                    component="p"
                    color="error"
                    variant="body2"
                >
                    {contactErr}
                </Typography>
            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              placeholder='Go ahead... we’re listening!!'
              rows='3'
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
            <button
              type='submit'
              className='btn btn-primary'
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <hr className='hr' />
    </div>
  )
}

export default SupportForm
