import React, {useState,useEffect, useContext} from 'react';
import BackLink from '../backLink/BackLink'
import LoginImage from '../../assets/img/login-img.png'
import './ApiGuide.css'
import Header from '../Header'
import { useQuery } from "@apollo/client";
import { GET_ALL_APIS } from "../constants"; 
import {AuthContext} from '../../DispatchContext';
import { client } from '../../App';
import {
  Redirect
} from 'react-router-dom';


const SearchApi = () => {

  const {logoutUser, token} = useContext(AuthContext);
  const userDetails = JSON.parse(localStorage.getItem('user'));
  const tokenStorage = JSON.parse(localStorage.getItem('token'));

  const [searchResult,setSearchResult] = useState("");
    const [searchQuery,setSearchQuery] = useState("");
    // const inputEvent = (event) => {
    //     const valueSearch = event.target.value; 
    //    // console.log(valueSearch);
    //    // string comparison 

    //    setSearchQuery(valueSearch);
    // };
    const { client, loading, error, data } = useQuery(GET_ALL_APIS, 
      { fetchPolicy: "network-only" });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    // useEffect(()=>{
    //     if(searchQuery && data){
    //         //comparison
    //         setSearchResult(data.getAllWso2Apis.filter(post=>post.name.includes(searchQuery)))
    //     }else{
    //         data && setSearchResult(data);
    //     }
    // },[data,searchQuery])
    console.log('searchapi', data);
    

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
          <div className='row mt-50 mb-50'>
            <div className='col-lg-3'>
              <div className='top-page-heading heading-font'>
                <h1>Search API</h1>
                <p>API Explorer for all registered APIs on the platform</p>
              </div>
            </div>
            <div className='col'>
              <div className='search-api page-form'>
                <div className='form-group'>
                  {/* <input
                    type='search'
                    className='form-control'
                    id='gsearch'
                    name='gsearch'
                    placeholder='Search API'
                  /> */}
                  <input type="search" className="form-control" id="gsearch" 
                          name="gsearch" placeholder="Search API" 
                          value = {searchQuery}
                           />
                </div>
              </div>
            </div>
            <div className='col-auto'>
              <div className='page-button'>
                <BackLink link={`/newlanding`} />
              </div>
            </div>
          </div>
          <div className='row mt-50 mb-50 justify-content-center'>
            <div className='col-lg-10'>
              <div className='search-api'>
                <table className='table table-responsive heading-font'>
                  <thead>
                    <tr>
                      <th className='h3 col-xl-2 col-lg-3 col-md-4 col-auto'>
                        Title
                      </th>
                      <th className='h3'>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.getAllWso2Apis.map((getAllWso2Apis) => {
                              return (
                    <tr key = {getAllWso2Apis.id}>
                       <td className='underline'>
                        <div className='table-title'>
                          <span className='light-blue'>
                          {getAllWso2Apis.name}
                          </span>
                        </div>
                      </td>
                                    <td className = "underline">
                                      <span className="table-title">{getAllWso2Apis.description}</span>
                                  </td>
                    
                    </tr>
                              )})}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    )  
}

export default SearchApi
