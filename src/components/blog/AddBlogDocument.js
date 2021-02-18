import React from 'react'
import deleteIcon from '../../assets/img/delete-icon.png'
import hackathon3 from '../../assets/img/hackathon3.jpg'

const AddBlogDocument = () => {
  return (
    <div className='container-fluid'>
      <div className='row mt-50 mb-50'>
        <div className='col'>
          <div className='top-page-heading white-default'>
            <h1>Add your blog</h1>
          </div>
        </div>
        <div className='col-auto'>
          <div className='page-button'>
            <button
              className='btn btn-primary button-transparent'
              type='submit'
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <form className='page-form add-blog'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                id='fname'
                name='fname'
                placeholder='Title'
              />
              <button
                className='btn btn-primary button-transparent'
                type='submit'
              >
                Upload Media
              </button>
              <div className='upload-document'>
                <span>
                  <img
                    className='ms-3 d-inline-block'
                    src={hackathon3}
                    alt='#'
                  />
                </span>
                <img src={deleteIcon} alt='#' />
              </div>
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                id='exampleTextarea'
                placeholder='Go ahead... we’re listening!!'
              ></textarea>
            </div>

            <button
              className='btn btn-primary button-filled mt-50 mb-50'
              type='submit'
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddBlogDocument
