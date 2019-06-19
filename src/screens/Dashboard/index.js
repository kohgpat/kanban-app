import React, { Component } from "react";
import Screen from "../../components/Screen";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";

class Dashboard extends Component {
  render() {
    return (
      <Screen>
        <Topbar />

        <Content>
          <Sidebar />
          <Main />
        </Content>
      </Screen>
    );
  }
}

export default Dashboard;
