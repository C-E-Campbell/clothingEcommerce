import React from "react";
import "./collection-item.styles.scss";
import Button from "../Button/Button";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted>Add to cart</Button>
    </div>
  );
};

export default CollectionItem;
