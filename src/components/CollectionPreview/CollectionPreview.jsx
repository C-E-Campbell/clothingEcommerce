import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items, name }) => {
  const shopItems = items
    .filter((item, i) => i < 4)
    .map(({ id, ...otherItemProps }) => {
      return <CollectionItem key={id} {...otherItemProps}></CollectionItem>;
    });

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">{shopItems}</div>
    </div>
  );
};

export default CollectionPreview;
