import React from "react";

import "./Computer.sass";
import logo from "../../img/logo.png";

const Computer = ({ data, passData }) => {
  const description = data;
  //const photo = data.images.photoUrl !== undefined ? data.images.photoUrl : logo
  const clickMe = (description) => {
    passData(description);
  };
  return (
    <div
      className="computer-container"
      id={"rank-" + data.rank}
      onClick={(e) => clickMe(description)}
    >
      <div className="info-container">
        {
          <div
            className="image-container"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        }
        <div className="title">
          <div className="rank">{data.rank}</div>
          <div className="computer-name">
            <h2>{data.systemName}</h2>
          </div>
        </div>
        <p>{data.manufacturer}</p>
      </div>
    </div>
  );
};

export default Computer;
