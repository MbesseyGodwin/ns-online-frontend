import React, { useState } from "react";
import "./AresDashboard.css";
import "./AresDashboard.scss";
import LiveDate from "./livedate/LiveDate";
import "animate.css";
import GraphCard from "./GraphCard";
import SpeedDial from "./SpeedDial";

const AresDashboard = () => {
  const [iit, setIIT] = useState(0.5); // Example initial value for iit
  const [txcur, setTXCUR] = useState(54.9); // Example initial value for txcur
  const [suppression, setSuppression] = useState(97.4); // Example initial value for suppression

  return (
    <div className="container-fluid">
      <div className="row g-2">
        <div className="col">
          <div className="row d-flex mb-4">
            <div className="col border border-secondary rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest">
                  <i class="fa-solid fa-fingerprint"></i> Patient Biometric
                  System
                </h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-secondary">With PBS</th>
                    <th className="border border-secondary">No PBS</th>
                    <th className="border border-secondary">Invalids</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-secondary">48,032</td>
                    <td className="border border-secondary">13,455</td>
                    <td className="border border-secondary">2,390</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-secondary rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest">
                  <i class="fa-solid fa-virus"></i> viral load (Q2)
                </h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-secondary">
                      samples collected
                    </th>
                    <th className="border border-secondary">pending samples</th>
                    <th className="border border-secondary">sent to PCR lab</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-secondary rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest">
                  <i class="fa-solid fa-truck-medical"></i> table 1
                </h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-secondary">data 1</th>
                    <th className="border border-secondary">data 2</th>
                    <th className="border border-secondary">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col self-center">
          <LiveDate />

          <div className="d-flex">
            <div className={`circle-loader border ${iit > 1? "border-danger animate__animated animate__pulse animate__infinite infinite" : "border-success"} mb-3 text-center`} title="Percentage of patients with iteration in treatment">
              <div className="center-text">
                <span className={`h1 ${iit > 1 ? "text-danger" : "text-success"}`}>{iit.toFixed(1)}%</span>{" "}
                <span>IIT</span>
              </div>
            </div>

            <div className={`circle-loader ${txcur === 0 ? "border-danger animate__animated animate__pulse animate__infinite infinite" : "border-success"} mb-3 text-center`} title="total number of patients on active treatment">
              <div className="center-text">
                <span className={`h1 ${txcur === 0 ? "text-danger" : "text-success"}`}>{txcur.toFixed(1)}%</span>{" "}
                <span>TX-CUR</span>
              </div>
            </div>

            <div className={`circle-loader mb-3 text-center ${suppression < 90 ? "border-danger animate__animated animate__pulse animate__infinite infinite" : "border-success"}`}title="Percentage of patients with suppressed viral load">
              <div className="center-text">
                <span className={`h1 ${suppression < 1 ? "text-danger" : "text-success"}`}>{suppression.toFixed(1)}%</span>{" "}
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
          <div className="row d-flex mb-4">
            <div className="col border border-secondary rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest">
                  <i class="fa-solid fa-person-running"></i> Tracking and
                  Retention
                </h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-secondary">data 1</th>
                    <th className="border border-secondary">data 2</th>
                    <th className="border border-secondary">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-secondary rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest">
                  <i class="fa-solid fa-house-chimney-medical"></i> clinical reports
                </h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-secondary">data 1</th>
                    <th className="border border-secondary">data 2</th>
                    <th className="border border-secondary">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row d-flex mb-4">
            <div className="col border border-secondary rounded p-2">
              <div className="text-center">
                <h2 className="text-uppercase text-green-300 text-success h3 tracking-widest">
                  <i class="fa-solid fa-syringe"></i> testing and case finding
                </h2>
              </div>
              <table className="table table-bordered mt-2">
                <thead>
                  <tr>
                    <th className="border border-secondary">data 1</th>
                    <th className="border border-secondary">data 2</th>
                    <th className="border border-secondary">data 3</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                    <td className="border border-secondary">0000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <SpeedDial />
    </div>
  );
};

export default AresDashboard;
