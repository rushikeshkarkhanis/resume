import React from "react";
import Workexp from "../workexps/Workexps";
import Education from "../education/Education";
import Awards from "../awards/Awards";

const Twothird = ({ resume }) => {

  return (
    <>
      <div className="w3-twothird">
        <Workexp resume={resume} />
        <Education resume={resume} />
        <Awards resume={resume} />
      </div>
    </>
  );
};

export default Twothird;
