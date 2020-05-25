import React from "react";

const Computer = ({ data, passData }) => {
  const description = data;
  const clickMe = (description) => {
    passData(description)
  }
  return (
    <div
      className="computer-container"
      id={"rank-" + data.rank}
      onClick={(e) => clickMe(description)}
    >
      <div className="info-container">
        <div
          className="image-container"
          style={{ backgroundImage: "url(" + data.images.photoUrl + ")" }}
        ></div>
        <div className="title">
          <div className="rank">{data.rank}</div>
          <div className="computer-name">
            <h2>{data.systemName}</h2>
          </div>
        </div>
        <p>{data.computer}</p>
      </div>
    </div>
  );
};

export default Computer;
