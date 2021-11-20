import React from "react";
import Loader from "react-loader-spinner";

const loaderStyle = {
  position: "absolute",
};

export default function LoaderSpinner() {
  return (
    <div style={loaderStyle}>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={30}
        width={30}
        timeout={3000} //3 secs
      />
    </div>
  );
}
