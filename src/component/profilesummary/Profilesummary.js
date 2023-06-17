import React from "react";

const Profilesummary = ({ resume }) => {

  return (
    <>
      <p>
        <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>{resume.resumeData.profile.designation}{" "}
      </p>
      <p>
        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>{resume.resumeData.profile.dob}
      </p>
      <p>
        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>{resume.resumeData.profile.totalexprience}
      </p>
      <p>
        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>{resume.resumeData.profile.location}
      </p>
      <p>
        <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>
        <a href={`mailto:${resume.resumeData.profile.email}`}>{resume.resumeData.profile.email}</a>
      </p>
      <p>
        <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-blue-grey"></i>
        <a href={`tel:${resume.resumeData.profile.contact}`} className="Blondie">
          {resume.resumeData.profile.contact}
        </a>
      </p>
      <hr></hr>
    </>
  );
};

export default Profilesummary;
