import React from "react";
import { DynamicMap, StaticMap } from "../../components/Map/Map";

import "./Description.sass";

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
      <div id="inactive-area" onClick={() => toggleClass()}></div>
      <div id="description-area">
        <div id="description-title">
          <div id="return-button" onClick={() => toggleClass()}>
            {"<"}
          </div>
          <div id="description-name">
            <h2>{computerData.systemName}</h2>
          </div>
        </div>
        <div id="description-data">
          <p>
            <span>Computer:</span> {computerData.computer}
          </p>
          <p>
            <span>Manufacturer:</span> {computerData.manufacturer}
          </p>
          <p>
            <span>Number of Processors:</span> {computerData.numberOfProcessors}
          </p>
          {loadMap(computerData.countryID, openStatus)}
          <p>
            <span>Country:</span> {computerData.country}
          </p>
          <p>
            <span>State/Town:</span> {computerData.town}, {computerData.state}
          </p>
          <p>
            <span>Year of installation:</span> {computerData.year}
          </p>
          <p>
            <span>r-Max:</span> {computerData.rMax}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
