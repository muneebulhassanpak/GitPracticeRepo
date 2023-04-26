import React from "react";
import Search from "./Search/Search";
import Temperature from "./Other-features/Temperature";
import classes from "./Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={classes["sidebar"]}>
      <Search />
      <Temperature />
    </div>
  );
};

export default Sidebar;
