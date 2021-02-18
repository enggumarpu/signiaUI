import React, { useEffect, useState, useContext } from 'react';
import Avatar from '../../assets/img/avatar.png';
import github from '../../assets/img/github.png';
import LoginImage from '../../assets/img/login-img.png';
import image10 from '../../assets/img/image10.png';
import Header from "../../components/Header";
import Compressor from 'compressorjs';
// import LoginLink from './LoginLink';
import { Button, Grid, Input, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import { useQuery } from "@apollo/client";
import { USERS_BY_ID } from "../constants";
import { useStyles } from './styles';
import RegistrationCard from '../common/RegistrationCard/RegistrationCard';
// import { SIGN_UP } from '../../components/constants';
import { gql, useMutation } from '@apollo/client';
import history from '../../utils/history';
import {AuthContext} from '../../DispatchContext';

const EditProfile = props => {
        
  const {userDetails, userNamePass, token, logoutUser} = useContext(AuthContext);

    const [email, setEmail] = useState("");
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
      //logoutUser();
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
      const logoutHandler =()=>{
        logoutUser();
        history.push("/")
      }
      // const SIGN_UP = gql `
      // mutation signUp($createUsersInput: CreateUsersInput!) {
      //   signUp(createUsersInput: $createUsersInput) {
      //     Firstname
      //     Lastname
      //     DOB
      //     Email
      //     ContactNo
      //     Address1
      //     Address2
      //     City
      //     Country
      //     Image
      //     CreatedUserId
      //     CreatedDate
      //     UpdatedDate}
            
      // }`;

    //   const [createLink, { loading, error, data }] = useMutation(SIGN_UP, {
    //     variables: {
    //       createUsersInput: {
    //           Username:email,
    //           Firstname: name,
    //           Lastname: name,
    //           DOB: dob,
    //           Email: email,
    //           ContactNo: contact,
    //           Address1: address1,
    //           Address2: address2,
    //           City: city,
    //           Country: country,
    //           Image: profileImagePath
    //         },
    //     }
    // });
    const EDIT_PROFILE = gql `
      mutation updateUser($updateUserInput: UpdateUsersInput!, $id: String!) {
       updateUser(updateUserInput: $updateUserInput, id: $id) {
          Firstname
          Lastname
          id
          DOB
          Email
        }
            
      }`;
     console.log('edit pfoffffff', token)
      const [updateUserMutation, { loading, error, data }] = useMutation(EDIT_PROFILE, {
        variables: {
          id: token ? userDetails.id : null,
          updateUserInput: {
              Username:email,
              Password: token ? userNamePass.userpass : null,
              Firstname: name,
              Lastname: name,
              DOB: dob,
              Email: email,
              ContactNo: contact,
              Address1: address1,
              Address2: address2,
              City: city,
              Country: country,
              //Image: profileImagePath
            },
        }
    });
    
    const saveHandler = ()=>{
      if(name == ""){
        setnameErr("Please Enter Name")
      }
      if(dob == ""){
        setDobErr("Please Enter d.o.b")
      }
      // if(profileImagePath == ""){
      //   setImageError("Please Select Image")
      // }
      if(email == ""){
        setEmailErr("Please Enter Email")
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
      if(name && dob && email && contact && address1 && city &&country){
        // createLink();
      }
    }
    useEffect(()=>{
      if(data){
        history.push("/newlanding")
        // console.log('data',data)
      }
    },[data])
    // useEffect(()=>{
    //   if(data){
    //     history.push("/newlanding")
    //     // console.log('data',data)
    //   }
    // },[data])
    // const { loading, error, data } = useQuery(USERS_BY_ID);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
    return (
        <>
            <Header
            logoutText={"Logout"}
            onClickLogout={logoutHandler}
            name={"dummy name"}
            resource={"Resource"}
            support={"Support"}
            events={"Events"}
            imageTag={<img className="profile-user-image" src={LoginImage} alt= "ProfileImage"/>}
        />
        {/* {data.UsersById.map((UsersById) => {
                return ( */}
                  {console.log('edit profile', userNamePass)}
            <RegistrationCard 
                heading={"Developer Profile"}
                description={"Edit your name, avatar etc."}
                avatarImage={profileImagePath ? profileImagePath : Avatar}
                // onClickUpload={}
                uploadImageText={"Upload Image"}
                regDateTitle={"Registration Date"}
                regDate={"30, Jan, 2020"}
                editPassword={true}
                onChangeName={textHandler}
                
                name={name}
                inputName={"name"}
                onChangeDob={textHandler}
                dob={dob}
                inputDob={"dob"}
                onChangeEmail={textHandler}
                email={email}
                inputEmail={"email"}
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
                contactErr={contactErr}
                address1Err={address1Err}
                cityErr={cityErr}
                countryErr={countryErr}
                imageError={imageError}
                progressCount={70}
                projectsCount={3}
                pointsCount={160}
                eHealthCount={0}
                cityCount={0}
                agricultureCount={0}
            />
                
        </>
    )
}

export default EditProfile;