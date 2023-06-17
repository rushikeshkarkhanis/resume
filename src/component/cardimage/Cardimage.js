import React from "react";
import profileImg from "../../assets/profile-photo.JPG";


const Cardimage = ({ resume }) => {
  return (
    <>
      <h2>{resume.resumeData.profile.role}</h2>
      <div className="w3-display-container" data-aos="fade-up">
        <img src={profileImg} alt="Ashutosh Kolambkar" style={{ width: "100%" }} data-aos="fade-up" />
        <div className="w3-display-bottomleft w3-container w3-text-white" data-aos="fade-up">
          <h2>{resume.resumeData.profile.name}</h2>
        </div>
      </div>
    </>
  );
};

export default Cardimage;
