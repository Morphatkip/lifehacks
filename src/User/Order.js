import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Order() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
        <TabPanel>
          <div>this is the first tab</div>
        </TabPanel>
        <TabPanel>
          <div>this is the second tab</div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Order;
