import React, { Component } from "react";
import FuturisticDashboard from "./FuturisticDashboard";
import AresBoard from "./AresBoard";

export class Dashboarding extends Component {
  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }

  render() {
    return (
      <div>
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
