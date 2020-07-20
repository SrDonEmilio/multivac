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
          <div class="description-content" id="description-text">
            <p>
              <span>Computer:</span> {computerData.computer}
            </p>
            <p>
              <span>Manufacturer:</span> {computerData.manufacturer}
            </p>
            <p>
              <span>Cores:</span> {computerData.numberOfProcessors}
            </p>
            <p>
              <span>Year of installation:</span> {computerData.year}
            </p>
            <p>
              <span>Rmax (TFlop/s):</span> {computerData.rMax}
            </p>
            <p>
              <span>Rpeak (TFlop/s):</span> {computerData.rPeak}
            </p>
            <p>
              <span>Power (kW):</span> {computerData.rPeak}
            </p>
          </div>
          <div class="description-content" id="description-map">
            {loadMap(computerData.countryID, openStatus)}
            <p>
              <span>Country:</span> {computerData.country}
            </p>
            <p>
              <span>State/Town:</span> {computerData.town}, {computerData.state}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
