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
      <div class="w3-row">
        <div class="w3-col s2  w3-center">
          <h1>
            <GiBoxingGlove />
          </h1>
        </div>
        <div class="w3-col s2 w3-center">
          <h1>
            <GiHiking />
          </h1>
        </div>
        <div class="w3-col s2 w3-center">
          <h1>
            <GiCommercialAirplane />
          </h1>
        </div>
        <div class="w3-col s2  w3-center">
          <h1>
            <GiCampCookingPot />
          </h1>
        </div>
        <div class="w3-col s2 w3-center">
          <h1>
            <GiSoccerKick />
          </h1>
        </div>
        <div class="w3-col s2 w3-center">
          <h1>
            <GrYoutube />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hobbies;