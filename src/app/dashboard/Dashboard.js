import React, { Component } from "react";
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
          <DashboardSlides />
        </div>
      </div>
    );
  }
}

export default Dashboarding;
