import React from "react";
import { GiBoxingGlove, GiHiking, GiCommercialAirplane, GiCampCookingPot, GiSoccerKick } from "react-icons/gi";
import { GrYoutube } from "react-icons/gr";
const Hobbies = () => {
  return (
    <>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-globe fa-fw w3-margin-right w3-text-blue-grey"></i>Hobbies
        </b>
      </p>
      <ul>
        <GiBoxingGlove />
        <GiHiking />
        <GiCommercialAirplane />
        <GiCampCookingPot />
        <GiSoccerKick />
        <GrYoutube />
      </ul>
    </>
  );
};

export default Hobbies;
