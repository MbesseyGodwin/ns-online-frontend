// Import React and required components/styles
import React, { useState } from "react";
import "./AresDashboard.css";
import "./AresDashboard.scss";
import LiveDate from "./livedate/LiveDate";
import "animate.css";
import GraphCard from "./GraphCard";
import SpeedDial from "./SpeedDial";

// Reusable component for rendering tables
const TableComponent = ({ title, data }) => (
  <div className="col border border-secondary rounded p-2 mb-4">
    <div className="text-center">
      <h2 className="text-uppercase text-light text-success h3 tracking-widest">
        {title}
      </h2>
    </div>
    {/* Table for the specified data */}
    <table className="table table-bordered mt-2">
      <thead className="table-dark">
        <tr>
          {data.headings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-group-divider">
        <tr>
          {data.values.map((value, index) => (
            <td key={index}>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

// Reusable component for rendering circle loaders
const CircleLoader = ({ value, title, threshold, colorClass }) => (
  <div
    className={`circle-loader border ${
      value <= threshold
        ? `border-danger animate__animated animate__pulse animate__infinite infinite ${colorClass}`
        : "border-success"
    } mb-3 text-center`}
    title={title}
  >
    <div className="center-text">
      {/* Display the percentage value with specified color */}
      <span
        className={`h1 ${value <= threshold ? "text-danger" : "text-success"} `}
      >
        {value.toFixed(1)}%
      </span>{" "}
      <span>{title}</span>
    </div>
  </div>
);

// Reusable component for rendering circle loaders for CircleLoaderForTxCurr
const CircleLoaderForTxCurr = ({ value, title, threshold, colorClass }) => (
  <div
    className={`circle-loader border ${
      value <= threshold
        ? `border-danger animate__animated animate__pulse animate__infinite infinite ${colorClass}`
        : "border-success"
    } mb-3 text-center`}
    title={title}
  >
    <div className="center-text">
      {/* Display the percentage value with specified color */}
      <span
        className={`h1 ${value <= threshold ? "text-danger" : "text-success"} `}
      >
        {/* Use toLocaleString() to add numerical separator */}
        {value.toLocaleString()}
      </span>{" "}
      <span>{title}</span>
    </div>
  </div>
);

// Main AresDashboard component
const AresDashboard = () => {
  // Initial state values for key metrics
  const [iit, setIIT] = useState(0.7);
  const [txcur, setTXCUR] = useState(49856);
  const [suppression, setSuppression] = useState(97.4);

  // Render component UI
  return (
    <div className="container-fluid">
      {/* Main layout with rows and columns */}
      <div className="row g-2">
        <div className="col">
          {/* Render Patient Biometric System Table */}
          <TableComponent
            title="Patient Biometric System"
            data={{
              headings: ["With PBS", "No PBS", "Invalids"],
              values: ["48,032", "13,455", "2,390"],
            }}
          />

          {/* Render Viral Load (Q2) Table */}
          <TableComponent
            title="Viral Load (Q2)"
            data={{
              headings: [
                "Samples Collected",
                "Pending Samples",
                "Sent to PCR Lab",
              ],
              values: ["0000", "0000", "0000"],
            }}
          />

          {/* Render Table 1 */}
          <TableComponent
            title="Table 1"
            data={{
              headings: ["Data 1", "Data 2", "Data 3"],
              values: ["0000", "0000", "0000"],
            }}
          />
        </div>

        <div className="col self-center">
          {/* LiveDate component */}
          {/* <LiveDate /> */}

          {/* Display key metric circle loaders */}
          <div className="d-flex">
            {/* IIT Percentage */}
            <CircleLoader
              value={iit}
              title="IIT"
              threshold={0}
              colorClass="animate__animated animate__pulse animate__infinite infinite"
            />

            {/* TX-CUR Percentage */}
            <CircleLoaderForTxCurr
              className=""
              value={txcur}
              title="TX-CUR"
              threshold={30}
            />

            {/* Suppression Percentage */}
            <CircleLoader
              value={suppression}
              title="SUPPRESSION"
              threshold={95}
              colorClass="animate__animated animate__pulse animate__infinite infinite"
            />
          </div>

          {/* Render GraphCard component */}
          <div className="row d-flex mx-2">
            <div className="col">
              <GraphCard />
            </div>
          </div>
        </div>

        <div className="col">
          {/* Render Tracking and Retention Table */}
          <TableComponent
            title="Tracking and Retention"
            data={{
              headings: ["Data 1", "Data 2", "Data 3"],
              values: ["0000", "0000", "0000"],
            }}
          />

          {/* Render Clinical Reports Table */}
          <TableComponent
            title="Clinical Reports"
            data={{
              headings: ["Data 1", "Data 2", "Data 3"],
              values: ["0000", "0000", "0000"],
            }}
          />

          {/* Render Testing and Case Finding Table */}
          <TableComponent
            title="Testing and Case Finding"
            data={{
              headings: ["Data 1", "Data 2", "Data 3"],
              values: ["0000", "0000", "0000"],
            }}
          />
        </div>
      </div>

      {/* SpeedDial component */}
      {/* <SpeedDial /> */}
    </div>
  );
};

// Export AresDashboard component as default export
export default AresDashboard;
