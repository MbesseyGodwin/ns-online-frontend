import React, { Component } from "react";
import Globalproperties from "./Globalproperties";
import DashboardSlides from "./DashboardSlides";
import DashboardCards from "./DashboardCards";


export class Dashboarding extends Component {

  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }

  render() {
    return (
      <div>
        <DashboardCards />

        <div className="row">
          {/* dashboard slides */}
          <DashboardSlides />
          {/* Globalproperties data */}
          <Globalproperties />
        </div>
      </div>
    );
  }
}

export default Dashboarding;
