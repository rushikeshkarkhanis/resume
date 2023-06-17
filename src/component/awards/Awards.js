import React from 'react'

function Awards({ resume }) {
    return (
        <>
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16" data-aos="fade-up">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i>Awards
                </h2>
                <div class="w3-row-padding">


                    {resume.resumeData.profile.rewards.map((rwd, i) => {
                        return (
                            <>
                                <div class="w3-col s6 w3-center">
                                    <div class="w3-panel w3-card-4">
                                        <h1><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-blue-grey"></i></h1>
                                        <h5 className="w3-opacity">
                                            <b>{rwd.when}</b>
                                        </h5>
                                        <h6 className="w3-text-blue-grey">
                                            <i className="fa fa-calendar fa-fw w3-margin-right"></i>{rwd.company}
                                        </h6>
                                        <p>{rwd.which}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })


                    }</div>
            </div>
        </>
    )
}

export default Awards