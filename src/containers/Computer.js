import React from "react";

const Computer = ({ data }) => {
  return (
    <div className="computer-container" id={data.rank}>
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
        <span>{data.computer}</span>
      </div>
      <div className="description-container">
        <h2>{data.systemName}</h2>
        <p className="description">{data.computer}</p>
        <div className="img-sources">
          <span>Image:</span>
          <p>{data.images.photoDescription}</p>
          <a href={data.images.photoReference}>Ver más</a>
        </div>
      </div>
    </div>
  );
}

export default Computer;
