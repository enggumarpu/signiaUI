import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ApiGuide.css";

const ApiTabs = () => {
  return (
    <Tabs>
      <TabList>
      <ul>
        <li><Tab>Introduction</Tab> </li>
        <li> <Tab>Get Started</Tab> </li>
        <li><Tab> Consume APi </Tab></li>
        <li><Tab> Publish Your First Application </Tab></li>
        </ul>
      </TabList>

      <TabPanel className="heading-font">
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
      <TabPanel className="heading-font">
        <h1>
          Check 
        </h1>
        <p>
          Shipa’s application management framework, integrated into OKE,
          provides an out-of-the-box way for organizations to build, deploy and
          operate the full life-cycle of Kubernetes applications. With Shipa and
          OKE, organizations can make up for lost time and start getting value
          out of Kubernetes immediately
        </p>
      </TabPanel>
      <TabPanel className="heading-font">
        <h1>
         Waja
        </h1>
        <p>
          Shipa’s application management framework, integrated into OKE,
          provides an out-of-the-box way for organizations to build, deploy and
          operate the full life-cycle of Kubernetes applications. With Shipa and
          OKE, organizations can make up for lost time and start getting value
          out of Kubernetes immediately
        </p>
      </TabPanel>
      <TabPanel className="heading-font">
        <h1>
          Awin
        </h1>
        <p>
          Shipa’s application management framework, integrated into OKE,
          provides an out-of-the-box way for organizations to build, deploy and
          operate the full life-cycle of Kubernetes applications. With Shipa and
          OKE, organizations can make up for lost time and start getting value
          out of Kubernetes immediately
        </p>
      </TabPanel>
      
    </Tabs>
  );
};

export default ApiTabs;
