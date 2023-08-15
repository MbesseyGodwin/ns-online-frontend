import React, { Component } from "react";
import DashboardSlides from "./DashboardSlides";
import DashboardCards from "./DashboardCards";
import FuturisticDashboard from "./FuturisticDashboard";


export class Dashboarding extends Component {

  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }

  render() {
    return (
      <div>

<FuturisticDashboard />
        {/* <DashboardCards /> */}
        <div className="row">
          {/* <DashboardSlides /> */}
        </div>
      </div>
    );
  }
}

export default Dashboarding;
