import React from "react";
import { DynamicMap, StaticMap } from "../components/Map";

const Description = ({ computerData, className, changeClass, openStatus }) => {
  const toggleClass = () => {
    changeClass();
    loadMap(computerData);
  };

  const loadMap = (countryID, status) => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return <StaticMap country={countryID} />;
    }

    return <DynamicMap country={countryID} openStatus={status} />;
  };

  return (
    <div id="description-container" className={className}>
      <div id="description-title">
        <div id="return-button" onClick={(e) => toggleClass()}>
          {"<"}
        </div>
        <div id="description-name">{computerData.systemName}</div>
      </div>
      <div id="description-data">
        <p>Computer {computerData.computer}</p>
        <p>Manufacturer: {computerData.manufacturer}</p>
        <p>Number of Processors {computerData.numberOfProcessors}</p>
        {loadMap(computerData.countryID, openStatus)}
        <p>Country: {computerData.country}</p>
        <p>
          State/Town: {computerData.town}, {computerData.state}
        </p>
        <p>Year of installation: {computerData.year}</p>
        <p>r-Max: {computerData.rMax}</p>
      </div>
    </div>
  );
};

export default Description;
