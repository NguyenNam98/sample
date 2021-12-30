import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import configureStore, { history } from "./redux/store";
import Routes from "./routes";
import AppContextProvider from "@jumbo/components/contextProvider/AppContextProvider";
import AppWrapper from "@jumbo/components/AppWrapper";
import Notification from "components/Notification";

export const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContextProvider>
          <AppWrapper>
            <Routes />
          </AppWrapper>
          <Notification />
        </AppContextProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
