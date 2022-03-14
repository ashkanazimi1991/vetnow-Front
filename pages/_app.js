import "../styles/globals.css";
import "../styles/login.css";
import "../styles/Sidebar.css";
import "../styles/Tabs.scss";
import { useState , useEffect } from "react";
import Router from "next/router";
import BetweenPage from "../components/Loading/betweenPage";
// import store from "../components/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {store , persistedStore} from "../components/redux/store"


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", url => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", url => {
    setLoading(false);
  });
 
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        {loading && <BetweenPage />}
        {!loading && <Component {...pageProps} />}
      </PersistGate>
    </Provider>
    </>
  );
}

export default MyApp;
