import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoading = () => {
  return (
    <ContentLoader
      speed={1}
      width={374}
      height={674}
      backgroundColor="#efe6e6"
      foregroundColor="#d7bcbc"
      animate
    >
      {/* image */}
      <rect x="0" y="0" rx="3" ry="3" width="374" height="400" />
      {/* title */}
      <rect x="0" y="420" rx="3" ry="3" width="200" height="20" />
      {/* about */}
      <rect x="0" y="460" rx="3" ry="3" width="260" height="30" />
      {/* rating */}
      <rect x="0" y="500" rx="3" ry="3" width="200" height="20" />
      {/* price */}
      <rect x="0" y="540" rx="3" ry="3" width="80" height="20" />
    </ContentLoader>
  );
};

export default SkeletonLoading;
