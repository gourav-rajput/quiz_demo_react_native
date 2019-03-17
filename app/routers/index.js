import React from "react";
import { Scene, Router } from "react-native-router-flux";

import Home from "../components/home/index.android.js"; //Home component

const RoutersComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} type="reset" hideNavBar="true" />
      </Scene>
    </Router>
  );
};

export default RoutersComponent;
