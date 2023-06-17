import React from "react";
import Workexp from "../workexps/Workexps";
import Education from "../education/Education";

const Twothird = ({ resume }) => {

  return (
    <>
      <div className="w3-twothird">
        <Workexp resume={resume} />
        <Education resume={resume} />
      </div>
    </>
  );
};

export default Twothird;
