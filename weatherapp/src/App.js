import React from "react";
import Sidebar from "./components/main-sidebar/Sidebar";
import classes from "./App.module.css";

import Main from "./components/Right-Half/Main";
function App() {
  return (
    <div className={classes["entire-app"]}>
      <div className={classes["primary-sidebar"]}>
        <Sidebar />
      </div>
      <div className={classes["right-side"]}>
        <Main />
      </div>
    </div>
  );
}

export default App;
