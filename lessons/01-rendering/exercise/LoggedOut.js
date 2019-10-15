import React from "react"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs"
import LoginForm from "app/LoginForm"
import SignupForm from "app/SignupForm.final"
import About from "app/About"
// import LoggedOut from "./LoggedOut.final"
// export default LoggedOut

export default function LoggedOut() {
  return (
    <div className="LoggedOut">
      <About/>
      <Tabs>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Signup</Tab>
        </TabList>
      </Tabs>
      <TabPanels>
        <TabPanel>
         <LoginForm/>
        </TabPanel>
        <TabPanel>
          <SignupForm/>
        </TabPanel>
      </TabPanels>
    </div>
  );
}
