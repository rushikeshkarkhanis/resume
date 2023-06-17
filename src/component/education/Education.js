import React from "react";

const Education = ({ resume }) => {
  return (
    <>
      <div className="w3-container w3-card w3-white">
        <h2 className="w3-text-grey w3-padding-16" data-aos="fade-up">
          <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i>Education
        </h2>
        {resume.resumeData.profile.education.map((edu, i) => {
          return (
            <>
              <div className="w3-container" data-aos="fade-up">
                <h5 className="w3-opacity">
                  <b>{edu.institution}</b>
                </h5>
                <h6 className="w3-text-blue-grey">
                  <i className="fa fa-calendar fa-fw w3-margin-right"></i>{edu.year}
                </h6>
                <p>{edu.course}</p>
                <hr />
              </div>
            </>
          );
        })
        }
      </div>
    </>
  );
};

export default Education;
