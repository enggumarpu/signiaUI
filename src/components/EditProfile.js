// import { render } from '@testing-library/react'
// import { extend } from 'jquery'
// import React, { Component } from 'react'
// import developer from '../assets/img/developer-img.png'
// import './Profile.css'

// // class EditProfile extends Component {

// // render() {
// const EditProfile = () => {
//   return (
//     <div className='container-fluid'>
//       <div className='row mt-50 mb-50 text-white'>
//         <div className='col-lg-3'>
//           <div className='top-page-heading white-default'>
//             <h1>Developer Profile</h1>
//             <p>Edit your name, avatar etc.</p>
//           </div>
//           <div className='developer-profile text-center'>
//             <img alt='#' src={developer} />
//             <div className='text-center'>
//               <button className='btn btn-primary' type='submit'>
//                 Upload Image
//               </button>
//             </div>
//           </div>
//           <div className='profile-body text-center'>
//             <p className='white-default mb-50'>
//               Registration Date{' '}
//               <span className='text-right'>30, January 2020</span>
//             </p>
//             <button className='btn btn-primary' type='submit'>
//               Edit Password
//             </button>
//           </div>
//         </div>
//         <div className='col-lg-6 mt-1'>
//           <form className='page-form dev-form'>
//             <h2 className='white-default'>Personal Information</h2>
//             <div className='form-group'>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='formGroupExampleInput'
//                 placeholder='Name'
//               />
//             </div>
//             <div className='form-group'>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='formGroupExampleInput'
//                 placeholder='Date of Birth'
//               />
//             </div>
//           </form>
//           <form className='page-form dev-form'>
//             <h2 className='white-default mt-25'>Contact Information</h2>

//             <div className='form-group'>
//               <input
//                 type='email'
//                 className='form-control'
//                 id='exampleInputEmail1'
//                 aria-describedby='emailHelp'
//                 placeholder='Enter email'
//               />
//             </div>
//             <div className='form-group'>
//               <input
//                 type='tel'
//                 className='form-control'
//                 id='phone'
//                 name='phone'
//                 placeholder='Contact No'
//               />
//             </div>
//             <div className='form-group'>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='formGroupExampleInput'
//                 placeholder='Address Line 1'
//               />
//             </div>
//             <div className='form-group'>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='formGroupExampleInput'
//                 placeholder='Address Line 2'
//               />
//             </div>
//             <div className='form-group'>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='formGroupExampleInput'
//                 placeholder='City'
//               />
//             </div>
//             <div className='form-group'>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='formGroupExampleInput'
//                 placeholder='Country'
//               />
//             </div>
//             <div className='form-group justify-content-between d-flex'>
//               <button className='btn btn-primary' type='submit'>
//                 Cancel
//               </button>
//               <button className='btn btn-secondary' type='submit'>
//                 Save
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className='col-lg-3 mt-1'>
//           <h3 className='white-default'>Progress</h3>
//           <div className='progressbar-section white-default'>
//             <div className='projects'>
//               <p>
//                 <strong>3</strong> Projects{' '}
//                 <span className='ms-5'>| 160 Points</span>
//               </p>
//             </div>
//             <div className='progress'>
//               <div
//                 className='progress-bar'
//                 role='progressbar'
//                 aria-valuenow='65'
//                 aria-valuemin='0'
//                 aria-valuemax='100'
//                 style={{ width: '75%' }}
//               ></div>
//             </div>
//           </div>
//           <div className='progress-list'>
//             <h2 className='white-default'>Projects</h2>
//             <ul className='custom-list'>
//               <li className='white-default'>
//                 <strong>eHealth</strong> | 0 Projects
//               </li>
//               <li className='white-default'>
//                 <strong>Smart City</strong> | 0 Projects
//               </li>
//               <li className='white-default'>
//                 <strong>Smart Agriculture</strong> | 3 Projects
//               </li>
//             </ul>
//             <div className='text-end'>
//               <button className='btn btn-primary' type='submit'>
//                 Project Detail
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default EditProfile

import React, { useEffect, useState, useContext } from 'react';
import Avatar from '../assets/img/avatar.png';
import github from '../assets/img/github.png';
import LoginImage from '../assets/img/login-img.png';
import image10 from '../assets/img/image10.png';
import Header from "./Header";
import Compressor from 'compressorjs';
// import LoginLink from './LoginLink';
import { Button, Grid, Input, InputAdornment, Link, TextField, Typography } from '@material-ui/core';
import { useQuery } from "@apollo/client";
import { USERS_BY_ID } from "./constants";
import { useStyles } from './common/RegistrationCard/styles';
//import RegistrationCard from '../common/RegistrationCard/RegistrationCard';
import RegistrationCard from '../components/common/RegistrationCard/RegistrationCard';
// import { SIGN_UP } from '../../components/constants';
 import { gql, useMutation } from '@apollo/client';
 import history from '../utils/history';
 import { AuthContext } from '../DispatchContext';

// const EditProfile = props => {
        
//   const {userDetails, userNamePass, token, logoutUser} = useContext(AuthContext);

//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [dob, setDob] = useState("");
//     const [contact, setContact] = useState("");
//     const [address1, setAddress1] = useState("");
//     const [address2, setAddress2] = useState("");
//     const [city, setCity] = useState("");
//     const [country, setCountry] = useState("");
//     const [profileImagePath, setProfileImagePath] = useState('');
//     const [profileImage, setProfileImage] = useState('');
//     const [imageError, setImageError] = useState('');
//     const [emailErr, setEmailErr] = useState('');
//     const [nameErr, setnameErr] = useState('');
//     const [dobErr, setDobErr] = useState('');
//     const [contactErr, setContactErr] = useState('');
//     const [address1Err, setAddress1Err] = useState('');
//     const [cityErr, setCityErr] = useState('');
//     const [countryErr, setCountryErr] = useState('');
//     const classes = useStyles();

//     const textHandler = (e) => {
//         if(e.target.name == "name"){
//             setName(e.target.value);
//             setnameErr("")
//         }
//         else if(e.target.name =="dob"){
//             setDob(e.target.value)
//             setDobErr("")
//         }
//         else if(e.target.name =="email"){
//             setEmail(e.target.value)
//             setEmailErr("")
//         }
//         else if(e.target.name =="contact"){
//             setContact(e.target.value)
//             setContactErr("")
//         }
//         else if(e.target.name =="address1"){
//             setAddress1(e.target.value)
//             setAddress1Err("")
//         }
//         else if(e.target.name =="address2"){
//             setAddress2(e.target.value)
//         }
//         else if(e.target.name =="city"){
//             setCity(e.target.value)
//             setCityErr("")
//         }
//         else if(e.target.name =="country"){
//             setCountry(e.target.value)
//             setCountryErr("")
//         }
//     };
//     const cancelHandler = ()=>{
//       logoutUser();
//       history.push("/")
//     }
    
//     const uploadImageHandler = event => {
//         if (
//           event.target.files[0].type === 'image/jpeg' ||
//           event.target.files[0].type === 'image/png'  ||
//           event.target.files[0].type === 'image/jpg'
//         ) {
//           var file = event.target.files[0];
//           var ff = window.URL.createObjectURL(file);
//           new Compressor(file, {
//             quality: 0.6,
//             success(result) {
//               var dd = window.URL.createObjectURL(result);
//               setProfileImagePath(dd);
//               var filess = new File([result], file.name, {
//                 type: 'image/jpeg',
//                 lastModified: Date.now(),
//               });
//               setProfileImage(filess);
//             },
//             error(err) {
//               console.log(err.message);
//             },
//           });
//           setImageError('');
//         } else {
//           setImageError('Please select only jpg/jpeg/png type image');
//         }
//       };
//       const logoutHandler =()=>{
//         history.push("/")
//       }
//       // const SIGN_UP = gql `
//       // mutation signUp($createUsersInput: CreateUsersInput!) {
//       //   signUp(createUsersInput: $createUsersInput) {
//       //     Firstname
//       //     Lastname
//       //     DOB
//       //     Email
//       //     ContactNo
//       //     Address1
//       //     Address2
//       //     City
//       //     Country
//       //     Image
//       //     CreatedUserId
//       //     CreatedDate
//       //     UpdatedDate}
            
//       // }`;

//     //   const [createLink, { loading, error, data }] = useMutation(SIGN_UP, {
//     //     variables: {
//     //       createUsersInput: {
//     //           Username:email,
//     //           Firstname: name,
//     //           Lastname: name,
//     //           DOB: dob,
//     //           Email: email,
//     //           ContactNo: contact,
//     //           Address1: address1,
//     //           Address2: address2,
//     //           City: city,
//     //           Country: country,
//     //           Image: profileImagePath
//     //         },
//     //     }
//     // });
//     const EDIT_PROFILE = gql `
//       mutation updateUser($updateUserInput: UpdateUsersInput!, $id: String!) {
//        updateUser(updateUserInput: $updateUserInput, id: $id) {
//           Firstname
//           Lastname
//           id
//           DOB
//           Email
//         }
            
//       }`;
//      console.log('edit pfoffffff', token)
//       const [updateUserMutation, { loading, error, data }] = useMutation(EDIT_PROFILE, {
//         variables: {
//           id: token ? userDetails.id : null,
//           updateUserInput: {
//               Username:email,
//               Password: token ? userNamePass.userpass : null,
//               Firstname: name,
//               Lastname: name,
//               DOB: dob,
//               Email: email,
//               ContactNo: contact,
//               Address1: address1,
//               Address2: address2,
//               City: city,
//               Country: country,
//               //Image: profileImagePath
//             },
//         }
//     });
    
//     const saveHandler = ()=>{
//       if(name == ""){
//         setnameErr("Please Enter Name")
//       }
//       if(dob == ""){
//         setDobErr("Please Enter d.o.b")
//       }
//       // if(profileImagePath == ""){
//       //   setImageError("Please Select Image")
//       // }
//       if(email == ""){
//         setEmailErr("Please Enter Email")
//       }
//       if(contact == ""){
//         setContactErr("Please Enter Contact")
//       }
//       if(address1 == ""){
//         setAddress1Err("Please Enter Address")
//       }
//       if(city == ""){
//         setCityErr("Please Enter City")
//       }
//       if(country == ""){
//         setCountryErr("Please Enter Country")
//       }
//       if(name && dob && email && contact && address1 && city &&country){
//         updateUserMutation();
//       }
//     }
//     useEffect(()=>{
//       if(data){
//         history.push("/newlanding")
//         // console.log('data',data)
//       }
//     },[data])
//     // useEffect(()=>{
//     //   if(data){
//     //     history.push("/newlanding")
//     //     // console.log('data',data)
//     //   }
//     // },[data])
//     // const { loading, error, data } = useQuery(USERS_BY_ID);
//     // if (loading) return <p>Loading...</p>;
//     // if (error) return <p>Error :(</p>;
//     return (
//         <>
//             <Header
//             logoutText={"Logout"}
//             onClickLogout={logoutHandler}
//             name={"dummy name"}
//             resource={"Resource"}
//             support={"Support"}
//             events={"Events"}
//             imageTag={<img className="profile-user-image" src={LoginImage} alt= "ProfileImage"/>}
//         />
//         {/* {data.UsersById.map((UsersById) => {
//                 return ( */}
//                   {console.log('edit profile', userNamePass)}
//             <RegistrationCard 
//                 heading={"Developer Profile"}
//                 description={"Edit your name, avatar etc."}
//                 avatarImage={profileImagePath ? profileImagePath : Avatar}
//                 // onClickUpload={}
//                 uploadImageText={"Upload Image"}
//                 regDateTitle={"Registration Date"}
//                 regDate={"30, Jan, 2020"}
//                 editPassword={true}
//                 onChangeName={textHandler}
                
//                 name={name}
//                 inputName={"name"}
//                 onChangeDob={textHandler}
//                 dob={dob}
//                 inputDob={"dob"}
//                 onChangeEmail={textHandler}
//                 email={email}
//                 inputEmail={"email"}
//                 onChangeContact={textHandler}
//                 contact={contact}
//                 inputContact={"contact"}
//                 onChangeAddress1={textHandler}
//                 address1={address1}
//                 inputAddress1={"address1"}
//                 onChangeAddress2={textHandler}
//                 address2={address2}
//                 inputAddress2={"address2"}
//                 onChangeCity={textHandler}
//                 city={city}
//                 inputCity={"city"}
//                 onChangeCountry={textHandler}
//                 country={country}
//                 inputCountry={"country"}
//                 onClickCancel={cancelHandler}
//                 onClickSave={saveHandler}
//                 cancelText={"Cancel"}
//                 saveText={"Continue"}
//                 uploadImageHandler={e => uploadImageHandler(e)}
//                 nameErr={nameErr}
//                 dobErr={dobErr}
//                 emailErr={emailErr}
//                 contactErr={contactErr}
//                 address1Err={address1Err}
//                 cityErr={cityErr}
//                 countryErr={countryErr}
//                 imageError={imageError}
//                 progressCount={70}
//                 projectsCount={3}
//                 pointsCount={160}
//                 eHealthCount={0}
//                 cityCount={0}
//                 agricultureCount={0}
//             />
                
//         </>
//     )
// }

// export default EditProfile;
const EditProfile = props => {
        
  const {logoutUser, token, userNamePass, userDetails} = useContext(AuthContext);

  const userDetailss = JSON.parse(localStorage.getItem('user'));
  const tokenStorage = JSON.parse(localStorage.getItem('token'));

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
      logoutUser();
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
     console.log('edit pfoffffff', userDetails)
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
        updateUserMutation();
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
export default EditProfile