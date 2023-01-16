import React from "react";
import Chat from "../Chat";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import NewOrder from "../../User/NewOrder";
import Profile from "../../User/Profile";
//import "react-tabs/style/react-tabs.css";

function BodyDash(props) {
  const type = props.type;
  return (
    <Tabs className="row">
      <TabList className="col-sm-4 list-group">
        <Tab className="list-group-item">Profile</Tab>{" "}
        <Tab className="list-group-item">Chat</Tab>
        <Tab className="list-group-item">NewOrder</Tab>{" "}
        <Tab className="list-group-item">Payments</Tab>
      </TabList>

      <div className="col-sm-5" style={{ height: 480 }}>
        <TabPanel>
          <div>
            <Profile />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="container">
            <Chat type={type} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <NewOrder />
          </div>
        </TabPanel>
        <TabPanel className="col-sm-8">
          <div className="col-sm-8 " style={{ backgroundColor: "white" }}>
            Payment
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
}

export default BodyDash;
