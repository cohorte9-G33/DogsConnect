import React from 'react';
import './spinner.css';

const spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-5">
        <div className="spinner-border text-info" role="status">
          {/* <span className="sr-only">Loading...</span> */}
        </div>
      </div>
    </>
  );
};

export default spinner;