import React from "react";

import "./Computer.sass";
import logo from "../../img/logo.png";

const Computer = ({ computerData, onClick }) => {
  //const photo = computerData.images.photoUrl !== undefined ? computerData.images.photoUrl : logo
  
  return (
    <div
      className="computer-container"
      id={"rank-" + computerData.rank}
      onClick={() => onClick()}
    >
      <div className="info-container">
        {
          <div
            className="image-container"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        }
        <div className="title">
          <div className="rank">{computerData.rank}</div>
          <div className="computer-name">
            <h2>{computerData.systemName}</h2>
          </div>
        </div>
        <p>{computerData.manufacturer}</p>
      </div>
    </div>
  );
};

export default Computer;
