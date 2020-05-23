import React from "react";

const Description = ({ description, className, changeClass }) => {
  const toggleClass = () => {
    console.log("Click");
    changeClass();
  };
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
      </div>
    </div>
  );
};

export default Description;
