import React, { useEffect, useState } from 'react';
import Avatar from '../../assets/img/avatar.png';
import github from '../../assets/img/github.png';
import image10 from '../../assets/img/image10.png';
import Header from "../../components/Header";
import Compressor from 'compressorjs';
import Swal from 'sweetalert2';
// import LoginLink from './LoginLink';
import { Button, Grid, Input, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import RegistrationCard from '../common/RegistrationCard/RegistrationCard';
// import { SIGN_UP } from '../../components/constants';
import { gql, useMutation } from '@apollo/client';
import history from '../../utils/history';


const Signup = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [contact, setContact] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [profileImagePath, setProfileImagePath] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [imageError, setImageError] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [nameErr, setnameErr] = useState('');
    const [dobErr, setDobErr] = useState('');
    const [contactErr, setContactErr] = useState('');
    const [address1Err, setAddress1Err] = useState('');
    const [cityErr, setCityErr] = useState('');
    const [countryErr, setCountryErr] = useState('');
    const classes = useStyles();

    const textHandler = (e) => {
      if(e.target.name == "name"){
          setName(e.target.value);
          setnameErr("")
      }
      else if(e.target.name =="dob"){
          setDob(e.target.value)
          setDobErr("")
      }
      else if(e.target.name =="email"){
          setEmail(e.target.value)
          setEmailErr("")
      }
      else if(e.target.name =="password"){
          setPassword(e.target.value)
          setPasswordErr("")
      }
      else if(e.target.name =="contact"){
          setContact(e.target.value)
          setContactErr("")
      }
      else if(e.target.name =="address1"){
          setAddress1(e.target.value)
          setAddress1Err("")
      }
      else if(e.target.name =="address2"){
          setAddress2(e.target.value)
      }
      else if(e.target.name =="city"){
          setCity(e.target.value)
          setCityErr("")
      }
      else if(e.target.name =="country"){
          setCountry(e.target.value)
          setCountryErr("")
      }
  };
  const cancelHandler = ()=>{
    history.push("/")
  }
    
    const uploadImageHandler = event => {
        if (
          event.target.files[0].type === 'image/jpeg' ||
          event.target.files[0].type === 'image/png'  ||
          event.target.files[0].type === 'image/jpg'
        ) {
          var file = event.target.files[0];
          var ff = window.URL.createObjectURL(file);
          new Compressor(file, {
            quality: 0.6,
            success(result) {
              var dd = window.URL.createObjectURL(result);
              setProfileImagePath(dd);
              var filess = new File([result], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now(),
              });
              setProfileImage(filess);
            },
            error(err) {
              console.log(err.message);
            },
          });
          setImageError('');
        } else {
          setImageError('Please select only jpg/jpeg/png type image');
        }
      };
      const loginOpenHandler =()=>{
        history.push("/")
      }
      const SIGN_UP = gql `
      mutation signUp($createUsersInput: CreateUsersInput!) {
        signUp(createUsersInput: $createUsersInput) {
          Firstname
          Lastname
          DOB
          Email
          ContactNo
          Address1
          Address2
          City
          Country
          Image
          CreatedUserId
          CreatedDate
          UpdatedDate}
            
      }`;
     
      const [createLink, { loading, error, data }] = useMutation(SIGN_UP, {
        variables: {
          createUsersInput: {
              Username:email,
              Password:password,
              Firstname: name,
              Lastname: name,
              DOB: dob,
              Email: email,
              ContactNo: contact,
              Address1: address1,
              Address2: address2,
              City: city,
              Country: country,
              Image: profileImagePath
            },
        }
    });
    const saveHandler = async ()=>{
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var pErr = false;
      if(email == ""){
        setEmailErr("Please Enter Email")
      }
      if(password == ""){
        setPasswordErr("Please Enter Password")
      }
      if (!re.test(String(email).toLowerCase())) {
        setEmailErr('Please enter valid email address');
        pErr = true;
      }
      if (password.length < 8) {
        setPasswordErr('Password must be at least 8, inlcuding special character, upper, lower case and numbers');
        pErr = true;
      }

      if(name == ""){
        setnameErr("Please Enter Name")
      }
      if(dob == ""){
        setDobErr("Please Enter d.o.b")
      }
      if(profileImagePath == ""){
        setImageError("Please Select Image")
      }
      if(contact == ""){
        setContactErr("Please Enter Contact")
      }
      if(address1 == ""){
        setAddress1Err("Please Enter Address")
      }
      if(city == ""){
        setCityErr("Please Enter City")
      }
      if(country == ""){
        setCountryErr("Please Enter Country")
      }
      if(name && dob && profileImagePath && email && password && contact && address1 && city && country && pErr == false){
       try{
       await createLink();
       }catch(e){
            Swal.fire({
                icon: 'error',
                title: 'Error ',
                html: 'Something went wrong',
              });
            // console.log(e.graphQLErrors[0].message.error,'eeeeeeeeeeee')
        }
      }
    }
    useEffect(()=>{
      if(data){
        history.push("/newlanding")
        // console.log('data',data)
      }
    },[data])
    
    return (
        <>
            <Header
                fontSizeHeading={"18px"}
                logoutText={"Sign in"}
                onClickLogout={loginOpenHandler}
            />
            <RegistrationCard
                heading={"Signup"}
                avatarImage={profileImagePath ? profileImagePath : Avatar}
                // onClickUpload={}
                uploadImageText={"Upload Image"}
                editPassword={false}
                onChangeName={textHandler}
                name={name}
                inputName={"name"}
                onChangeDob={textHandler}
                dob={dob}
                inputDob={"dob"}
                onChangeEmail={textHandler}
                email={email}
                inputEmail={"email"}
                onChangePassword={textHandler}
                password={password}
                inputPassword={"password"}
                onChangeContact={textHandler}
                contact={contact}
                inputContact={"contact"}
                onChangeAddress1={textHandler}
                address1={address1}
                inputAddress1={"address1"}
                onChangeAddress2={textHandler}
                address2={address2}
                inputAddress2={"address2"}
                onChangeCity={textHandler}
                city={city}
                inputCity={"city"}
                onChangeCountry={textHandler}
                country={country}
                inputCountry={"country"}
                onClickCancel={cancelHandler}
                onClickSave={saveHandler}
                cancelText={"Cancel"}
                saveText={"Continue"}
                uploadImageHandler={e => uploadImageHandler(e)}
                nameErr={nameErr}
                dobErr={dobErr}
                emailErr={emailErr}
                passwordErr={passwordErr}
                contactErr={contactErr}
                address1Err={address1Err}
                cityErr={cityErr}
                countryErr={countryErr}
                imageError={imageError}
            />

        </>
    )
}

export default Signup;