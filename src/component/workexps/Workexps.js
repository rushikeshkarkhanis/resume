import React from "react";
import Responsibilities from "../responsibilties/Responsibilities";

const Workexps = ({ resume }) => {
    console.log(resume);
    return (<>
        <div className="w3-container w3-card w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i>Work Experience
            </h2>
            {resume.resumeData.profile.workexprience.map((exp, i) => {
                return (
                    <>
                        <div className="w3-container" data-aos="fade-up">
                            <div className="w3-col s12">
                                <h5 className="w3-opacity">
                                    <b>{exp.company}</b>
                                </h5>
                            </div>
                            <div className="w3-col s6 ">
                                <h6 className="w3-text-blue-grey">
                                    <i className="fa fa-tasks fa-fw w3-margin-right"></i>{exp.designation}
                                </h6>
                            </div>
                            <div className="w3-col s6 w3-right-align">
                                <h6 className="w3-text-blue-grey">
                                    <i className="fa fa-calendar fa-fw w3-margin-right"></i>{exp.from} - <span className="w3-tag w3-blue-grey w3-round">{exp.to}</span>
                                </h6>
                            </div>
                            <Responsibilities responsbilities={exp.roles_responsibilities} />
                        </div>
                    </>
                );
            })
            }
        </div>
    </>);
};

export default Workexps;
