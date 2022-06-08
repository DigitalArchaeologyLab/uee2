import React from "react";
import "./Collection.css";

function Collection(props) {
  return (
    <div className="collection">
      <h3>{props.title_eng}</h3>
      <div>
        {props.filteredImages.map((image) => (
          <div key={image.id}>
            <img className="thumbnail" src={image.image_file}></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
