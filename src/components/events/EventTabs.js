import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import image11 from '../../assets/img/image11.png'
import image12 from '../../assets/img/image12.png'
import deleteIcon from '../../assets/img/delete-icon.png'
import './event.css'

const EventTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Event description</Tab>
        <Tab>Judges detail</Tab>
        <Tab>Project submission</Tab>
      </TabList>

      <TabPanel className='heading-font'>
        <h1>
          Faster and Safer Application Deployments on Kubernetes with Shipa and
          Oracle Kubernetes Engine (OKE)
        </h1>
        <p>
          Shipa’s application management framework, integrated into OKE,
          provides an out-of-the-box way for organizations to build, deploy and
          operate the full life-cycle of Kubernetes applications. With Shipa and
          OKE, organizations can make up for lost time and start getting value
          out of Kubernetes immediately
        </p>
      </TabPanel>
      <TabPanel>
        <div id='Judges' className='tabcontent heading-font'>
          <div className='row events-panel'>
            <div className='col-md-4 event-thumbnail'>
              <img className='rounded-corners w-100' src={image12} alt='#' />
            </div>
            <div className='event-detail col-md-8'>
              <p>Bruno Andede - CEO & Founder SHIPA</p>
            </div>
          </div>
          <div className='row events-panel'>
            <div className='col-md-4 event-thumbnail'>
              <img className='rounded-corners w-100' src={image11} alt='#' />
            </div>
            <div className='event-detail col-md-8'>
              <p>Bruno Andede - CEO & Founder SHIPA</p>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div id='Project' className='tabcontent heading-font'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='form page-form project-detail'>
                <label for='Textarea' className='fs-3 mb-3'>
                  Project Detail
                </label>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    id='exampleTextarea'
                    placeholder='Go ahead... we’re listening!!'
                  ></textarea>
                </div>
                <div className='row mt-3'>
                  <div className='col-auto'>
                    <div className='upload-document'>
                      <span>ABCD.docx</span>
                      <img
                        className='ms-3 d-inline-block'
                        src={deleteIcon}
                        alt='#'
                      />
                    </div>
                  </div>
                  <div className='col text-end'>
                    <button className='btn btn-primary' type='button'>
                      Upload Project
                    </button>
                  </div>
                </div>
                <div className='text-center mt-5 mb-5 w-100'>
                  <button
                    type='button'
                    className='btn btn-primary button-filled'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  )
}

export default EventTabs
