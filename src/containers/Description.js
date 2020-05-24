import React from "react";
import { DynamicMap, StaticMap } from "../components/Map";

const Description = ({ description, className, changeClass }) => {
  const toggleClass = () => {
    console.log("Click");
    changeClass();
    updateMap(description[3]);
  };

  const updateMap = (countryID) => {
    let id = countryID;
    return <DynamicMap country={id} />;
  };

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return (
      <div id="description-container" className={className}>
        <div id="description-title">
          <div id="return-button" onClick={(e) => toggleClass()}>
            {"<"}
          </div>
          <div id="description-name">{description[0]}</div>
        </div>
        <div>
          <p>Manufacturer: {description[1]}</p>
          <p>r-Max: {description[2]}</p>
          <StaticMap country={description[3]}/>
        </div>
      </div>
    );
  }

  return (
    <div id="description-container" className={className}>
      <div id="description-title">
        <div id="return-button" onClick={(e) => toggleClass()}>
          {"<"}
        </div>
        <div id="description-name">{description[0]}</div>
      </div>
      <div>
        <p>Manufacturer: {description[1]}</p>
        <p>r-Max: {description[2]}</p>
        {updateMap(description[3])}
      </div>
    </div>
  );
};

export default Description;
