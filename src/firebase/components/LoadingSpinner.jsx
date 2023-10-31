import React from 'react';
import { BarLoader, CircleLoader, ClipLoader, GridLoader, MoonLoader } from 'react-spinners';

const LoadingSpinner = () => {
      const cssOverride = {
            display: "block",
            margin: "0 auto",
            borderColor: "green",
          };



  return (
    <div className="flex items-center justify-center h-screen">
      {/* <BarLoader color="#3498db" height={5} width={150} margin="0 auto" /> */}
      {/* <CircleLoader color="#3498db" height={50} width={300} margin="0 auto"></CircleLoader> */}
      <GridLoader color='red'></GridLoader>
    </div>
  );
};

export default LoadingSpinner;
