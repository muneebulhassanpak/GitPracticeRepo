import React from "react";
import classes from "./Temperature.module.css";
const Temperature = () => {
  return (
    <div>
      <div className={classes["upper-half"]}>
        <div className={classes["img-representation"]}>
          <i class="fa-solid fa-cloud-sun"></i>
        </div>
        <div className={classes["temperature"]}>
          <h1>
            12<sup className={classes["degree"]}>0</sup>C
          </h1>
        </div>
        <div className={classes["day-time"]}>
          <h3>Day,Time</h3>
        </div>
      </div>
      <hr className={classes["hr-line"]} />
      <div className={classes["extra-data"]}>
        <h4>
          <i class="fa-solid fa-clouds"></i>
          Mostly Cloudy
        </h4>
        <h4>
          {/* <i class="fa-solid fa-cloud-rain"></i>30% Chance of Rain */}
          <i class="fa-solid fa-cloud-rain"></i>30% Chance of Rain
        </h4>
      </div>
      <div className={classes["place-image-div"]}>
        <img src="./lahore.jpg" alt="" className={classes["place-image"]} />
      </div>
    </div>
  );
};

export default Temperature;
