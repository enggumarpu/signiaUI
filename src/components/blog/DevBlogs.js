import React, {useState} from 'react';
import deleteIcon from "../../assets/img/delete-icon.png";
import editIcon from "../../assets/img/edit-icon.png";
import image18 from "../../assets/img/image18.png";
import LoginImage from '../../assets/img/login-img.png';
import { GET_ALL_BLOGS } from '../constants';
import './blog.css';
import { Link } from "react-router-dom";
import Header from '../Header';
import history from '../../utils/history';
import { gql, useQuery, useMutation } from '@apollo/client';
import BlogModel from "./BlogModel";


const DevBlogs = () => {

  const DeleteBlog = gql`mutation deleteBlog($id: String!) {
    deleteBlog(id: $id)  
}`;
const UPDATE_BLOG = gql `mutation updateBlog($id: String!, $updateBlogInput: UpdateBlogInput!) {
  updateBlog(id: $id, updateBlogInput: $updateBlogInput){
      id
      Title,
  } 
}`;
const [id, setId] = useState("");
const [openmodel, setOpenModel] = useState(false);
const [titleBlog, setTitleBlog] = useState();

const [createLink, { loadingd, errord }] = useMutation(DeleteBlog); 
const [updateBlogReact] = useMutation(UPDATE_BLOG)


  const { loading, error, data } = useQuery(GET_ALL_BLOGS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  


  const logoutHandler = ()=>{
    history.push("/adminlogin")
}

const backHandler = ()=>{
    history.push("/adminlanding")
}
const handleEdit = () => {
  setOpenModel(!openmodel);
}

  return (
    <>
       <Header
            logoutText={"Logout"}
            onClickLogout={logoutHandler}
            name={"Admin name"}
            imageTag={<img className="profile-user-image" src={LoginImage}/>}
        />
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <div className='community white-default'>
            <h1>Developers blog</h1>
          </div>
        </div>
        <div className='col-auto'>
          <div className='page-button'>
            <button className='btn btn-primary' onClick={backHandler}>
              Back
            </button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 pl-50 pr-50'>
          <div className='dev-blogs table-responsive'>
            <table className='table custom-table table-borderless heading-font'>
              <thead>
                <tr>
                  <th className='h3 text-center col-md-3 col-auto'>Title</th>
                  <th className='h3 col-md-5 col-auto'>Description</th>
                  <th className='h3 col-md-4 col-auto'>Written by</th>
                  <ht colSpan='2' className='h3 col-md-4 col-auto'></ht>
                </tr>
              </thead>
              {data.getAllBlogs.slice(0,5).map((getAllBlogs) => {
                return (
                  <tbody>
                    <tr>
                      <td>
                        <div
                          className='light-blue text-medium'
                          key={getAllBlogs.id}
                        >
                          <div className='row g-0'>
                            <div className='col-auto'>
                              <img src={image18} alt='#' />
                            </div>
                            <div className='col align-self-center ps-2'>
                              <span>{getAllBlogs.Title}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='white-default text-medium'>
                        <span>{getAllBlogs.Message}</span>
                      </td>
                      <td>
                        <span>
                          Kuassi Mensah
                          <br />
                          <small>JANUARY 31, 2021</small>
                        </span>
                      </td>
                      <td>
                      { openmodel && <BlogModel title={getAllBlogs.Title} canCacel canSave 
                                        onCancel={handleEdit}  
                                        inputChange={ (value) => {setTitleBlog(value)} }
                                         onSave= {() => updateBlogReact({
                                             variables: {
                                                id: getAllBlogs.id,
                                                 updateBlogInput: {
                                                    Title: titleBlog,
                                                     Message: "hello wte"
                                                 },
                                            },
                                         })}
                                        />}
                        <button className="btn" onClick={handleEdit}><img src={editIcon} /></button>
                      </td>
                      <td>
                        <button className = "btn" 
                        onClick={() => createLink({
                                         variables: { id: getAllBlogs.id }, 
                                          refetchQueries: [{query: GET_ALL_BLOGS}],

                                    })//createlink closing
                                    }> 
                        <img src={deleteIcon} /></button>
                      </td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
            <div className='text-end mt-50'>
              <button className='btn btn-primary' type='submit'>
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    );                            
};

export default DevBlogs
