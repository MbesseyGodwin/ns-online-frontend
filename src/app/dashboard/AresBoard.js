import React from "react";
import "./AresDashboard.css";
import "./AresDashboard.scss";
// import GaugeChart from "./GaugeChart";
import GaugeChartComponent from "./GaugeChart";
import LiveDate from "./livedate/LiveDate";
import 'animate.css';
import GraphCard from "./GraphCard";

const AresDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row g-2">
        <div className="col">
          <h2>left side</h2>

          <div className="row d-flex mb-4">
            <div className="col border border-white rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest"><i class="fa-solid fa-fingerprint"></i> Patient Biometric System</h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-white">With PBS</th>
                    <th className="border border-white">No PBS</th>
                    <th className="border border-white">Invalids</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-white">48,032</td>
                    <td className="border border-white">13,455</td>
                    <td className="border border-white">2,390</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-white rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest"><i class="fa-solid fa-virus"></i> viral load (Q2)</h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-white">samples collected</th>
                    <th className="border border-white">pending samples</th>
                    <th className="border border-white">sent to PCR lab</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-white rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest"><i class="fa-solid fa-truck-medical"></i> table 1</h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-white">data 1</th>
                    <th className="border border-white">data 2</th>
                    <th className="border border-white">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>

        <div className="col self-center">
          <LiveDate />
          <div className="d-flex">
            {/* add a condition, if the value is less than 1%, make the border to be red and the animated should beat non stop */}
            <div class="circle-loader border border-danger mb-3 text-center animate__animated animate__pulse animate__infinite	infinite">
              <div class="center-text">
                <span className="h1 text-danger">3.9%</span>{" "}
                <span>IIT</span>
              </div>
            </div>

            <div class="circle-loader mb-3 text-center animate__animated animate__bounce">
              <div class="center-text">
                <span className="h1 text-success">54,919</span>{" "}
                <span>TX-CUR</span>
              </div>
            </div>

            <div class="circle-loader mb-3 text-center animate__animated animate__bounce">
              <div class="center-text">
                <span className="h1 text-success">97%</span>{" "}
                <span>SUPPRESSION</span>
              </div>
            </div>
          </div>

          <div className="row d-flex mx-2">

            <div className="col">

            <GraphCard />
             
            </div>
          </div>

        </div>

        <div className="col">
          <h2>right side</h2>

          <div className="row d-flex mb-4">
            <div className="col border border-white rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest"><i class="fa-solid fa-person-running"></i> Tracking and Retention</h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-white">data 1</th>
                    <th className="border border-white">data 2</th>
                    <th className="border border-white">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-white rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest"><i class="fa-solid fa-house-chimney-medical"></i> clinical reports</h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-white">data 1</th>
                    <th className="border border-white">data 2</th>
                    <th className="border border-white">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-white rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest"><i class="fa-solid fa-syringe"></i> testing and case finding</h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-white">data 1</th>
                    <th className="border border-white">data 2</th>
                    <th className="border border-white">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                    <td className="border border-white">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default AresDashboard;
