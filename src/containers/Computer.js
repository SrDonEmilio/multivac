import React from "react";

function Computer({ data }) {
  return (
    <div id={data.rank}>
      <h2>Rank #{data.rank} {data.systemName}</h2>
      <p className="description">{data.computer}</p>
      <div className="image-container">
        <img
          className="img-supercomputer"
          src={data.images.photoUrl}
          alt={data.systemName}
        />
        <a className="photo-reference" href={data.images.photoReference}>{data.images.photoDescription}</a>
      </div>
    </div>
  );
}

export default Computer;
