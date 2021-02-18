import React,{ useContext } from 'react'
import Header from '../Header'
import LoginImage from '../../assets/img/login-img.png'
import BackLink from '../backLink/BackLink'
import { useQuery } from "@apollo/client";
import { GET_ALL_APIS } from "../constants"; 
import history from '../../utils/history';
import { AuthContext } from '../../DispatchContext';



function Publish() {

  const { logoutUser } = useContext(AuthContext);

  const logoutHandler = () => {
    logoutUser();
    history.push("/adminlogin")
  }
  
  const { loading, error, data } = useQuery(GET_ALL_APIS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  return (
    <>
    <Header
      logoutText={"Logout"}
      onClickLogout={logoutHandler}
      name={"Admin name"}
      imageTag={<img className="profile-user-image" src={LoginImage} />}
      />
    <div className='container-fluid'>
      <div className='row mt-50 mb-50'>
        <div className='col'>
          <div className='top-page-heading white-default'>
            <h1>APIs List</h1>
          </div>
        </div>
        <div className='col-auto'>
          <div className='page-button'>
            {/* <button className="btn btn-primary button" type="submit">Back</button> */}
            <BackLink link={`/adminlanding`} />
          </div>
        </div>
      </div>
      <div className='row mt-50 mb-50 justify-content-center'>
        <div className='col-lg-8'>
          <div className='bd-example mt-50 mb-50'>
            <div className='table-responsive'>
              <table className='table table-responsive custom-table table-borderless heading-font'>
                <thead>
                  <tr className='white-default'>
                    <th className='h3 col-lg-3 col-md-4 col-auto'>Title</th>
                    <th colSpan='2' className='h3'>
                      Description
                    </th>
                  </tr>
                </thead>
                {data.getAllWso2Apis.map((getAllWso2Apis) => {
                return (
                <tbody>
                  <tr key={getAllWso2Apis.id}>
                    <td className='light-blue text-medium'>
                    {getAllWso2Apis.name}
                    </td>
                    <td className='white-default text-medium'>
                    {getAllWso2Apis.description}
                    </td>
                    <td className='text-right'>
                    <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          value=''
                          id='CheckDefault'
                        />
                        <label
                          class='form-check-label'
                          for='CheckDefault'
                        ></label>
                      </div>
                    </td>
                  </tr>
                  {/* <tr>
                    <td className='light-blue text-medium'>
                      Access Context Manager API
                    </td>
                    <td className='white-default text-medium'>
                      An API for setting attribute based access control to
                      requests to GCP services.
                    </td>
                    <td className='text-right'>
                      <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          value=''
                          id='CheckDefault2'
                        />
                        <label
                          class='form-check-label'
                          for='CheckDefault2'
                        ></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='light-blue text-medium'>
                      Access Context Manager API
                    </td>
                    <td className='white-default text-medium'>
                      An API for setting attribute based access control to
                      requests to GCP services.
                    </td>
                    <td className='text-right'>
                      <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          value=''
                          id='CheckDefault3'
                        />
                        <label
                          class='form-check-label'
                          for='CheckDefault3'
                        ></label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='light-blue text-medium'>
                      Accelerated Mobile Pages (AMP) URL API
                    </td>
                    <td className='white-default text-medium'>
                      Retrieves the list of AMP URLs (and equivalent AMP Cache
                      URLs) for a given list of public URL(s).
                    </td>
                    <td className='text-right'>
                      <div class='form-check'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          value=''
                          id='flexCheckDefault'
                          checked
                        />
                        <label
                          class='form-check-label'
                          for='flexCheckDefault'
                        ></label>
                      </div>
                    </td>
                  </tr> */}
                </tbody>
                )
              })}
              </table>
            </div>
          </div>
          <div className='text-end'>
            <button
              className='btn btn-primary button-filled api-list-button'
              type='submit'
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Publish
