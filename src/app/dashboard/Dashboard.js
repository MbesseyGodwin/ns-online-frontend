import React, { Component } from "react";
import DashboardSlides from "./DashboardSlides";
import DashboardCards from "./DashboardCards";
import FuturisticDashboard from "./FuturisticDashboard";
import AresBoard from "./AresBoard";

export class Dashboarding extends Component {
  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }

  render() {
    return (
      <div>

        {/* <div className="card bg-success mb-2 text-left">
          <div className="card-body d-flex">
            <h4 className="card-title m-0 p-0">Abia</h4>
          </div>
        </div> */}

        <FuturisticDashboard />

        <AresBoard />
        {/* <DashboardCards /> */}
        <div className="row">
          {/* <DashboardSlides /> */}
        </div>
      </div>
    );
  }
}

export default Dashboarding;
