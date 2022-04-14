import React from "react";

import "./ImageOverview.less";
type Image = {
  href: string;
};
type ImageOverviewProps = {
  images: Image[];
};
const ImageOverview: React.FC<ImageOverviewProps> = ({ images }) => (
  <div className="ImageOverview">
    {images.map((image) => (
      <div>
        <img
          alt="nasa_image"
          src={image?.href}
          className="ImageOverview-logo"
        />
      </div>
    ))}
  </div>
);

export default ImageOverview;
