import React from "react";

const Picture = ({ photo }) => {
  return (
    <div className="picture">
      <p>{photo.photographer}</p>
      <div className="image">
        <img src={photo.src.large} alt="" />
      </div>
      <p>
        Download Image:
        <a target="_blank" href={photo.src.large}>
          Click
        </a>
      </p>
    </div>
  );
};

export default Picture;
