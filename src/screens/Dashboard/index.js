import React, { Component } from "react";
import Screen from "../../components/Screen";
import Flash from "../../components/Flash";
import Topbar from "../../components/Topbar";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Main from "../../components/Main";
import Lists from "../../components/Lists";
import { ListsProvider } from "../../contexts/lists";

class Dashboard extends Component {
  render() {
    return (
      <ListsProvider>
        <Screen>
          <Flash />
          <Topbar />

          <Content>
            <Sidebar />

            <Main>
              <Lists />
            </Main>
          </Content>
        </Screen>
      </ListsProvider>
    );
  }
}

export default Dashboard;
