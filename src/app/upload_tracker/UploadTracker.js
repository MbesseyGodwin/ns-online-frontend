// Import necessary libraries and modules
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";

// Define columns for the table
const columns = [
  {
    Header: "S.No",
    accessor: (row, index) => index + 1,
  },
  {
    Header: "Facility Name",
    accessor: "name",
  },
  {
    Header: "Date Time",
    accessor: "timestamp",
  },
  {
    // Display the duration in a human-readable format
    Header: "Duration",
    accessor: "datetime",
    Cell: ({ value }) => {
      const uploadDateTime = new Date(value);
      const currentDateTime = new Date();
      const durationMilliseconds = currentDateTime - uploadDateTime;
      const durationMinutes = Math.floor(durationMilliseconds / (1000 * 60));
      const durationHours = Math.floor(durationMinutes / 60);
      const durationDays = Math.floor(durationHours / 24);

      // Determine the text color based on the duration
      const textColor = durationDays > 1 ? "red" : "white";

      if (durationMinutes < 60) {
        return <span style={{ color: textColor }}>{`${durationMinutes} minutes ago`}</span>;
      } else if (durationHours < 24) {
        return <span style={{ color: textColor }}>{`${durationHours} hours ago`}</span>;
      } else {
        return <span style={{ color: textColor }}>{`${durationDays} days ago`}</span>;
      }
    },
    // Custom sorting logic to sort in descending order
    sortType: (rowA, rowB, columnId) => {
      const valueA = new Date(rowA.values[columnId]).getTime();
      const valueB = new Date(rowB.values[columnId]).getTime();

      return valueB - valueA;
    },
  },
];

// React component for the upload tracker
function UploadTracker() {
  // State to track online/offline status
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // API URL for fetching data
  const apiURL = process.env.REACT_APP_API_URL;

  // State for loading status and upload list
  const [isLoading, setIsLoading] = useState(true);
  const [uploadList, setUploadList] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchUploadList = async () => {
      try {
        const response = await axios.get(`${apiURL}names`);
        setUploadList(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUploadList();
  }, [apiURL]);

  // Default column settings for the table
  const defaultColumn = useMemo(() => ({ Filter: null }), []);

// Initialize React Table hooks for filtering and global filtering
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  state,
  setGlobalFilter,
} = useTable(
  {
    columns,
    data: uploadList,
    defaultColumn,
    initialState: {
      sortBy: [{ id: "timestamp", desc: true }],
    },
  },
  useFilters,
  useGlobalFilter
);


  // Extract globalFilter from the state
  const { globalFilter } = state;

  // Display status text based on online/offline status
  const statusText = isOnline ? null : (
    <tr>
      <td className="text-center" colSpan={columns.length}>
        NO INTERNET
      </td>
    </tr>
  );

  // Render the component UI
  return (
    <div className="">
      <h1 className="h2 uppercase">Facility Upload Tracker</h1>
      <div className="mb-3">
        {/* Input for searching and setting global filter */}
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      {/* Render the table */}
      <table className="table table-auto table-bordered" {...getTableProps()}>
        {/* Table header */}
        <thead className="thead-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Table body */}
        <tbody {...getTableBodyProps()}>
          {isLoading ? (
            // Loading indicator while data is being fetched
            <tr>
              <td className="text-center text-white h1 text-uppercase" colSpan={columns.length}>
                loading list, please wait... <i className="fa-solid fa-arrows-spin fa-spin"></i>
              </td>
            </tr>
          ) : (
            // Render each row of data
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="text-white" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })
          )}
          {/* Render the status text */}
          {statusText}
        </tbody>
      </table>
    </div>
  );
}

// Export the component as the default export
export default UploadTracker;

// update the code base, the table should be sorted based on duration, and if the duration is greater than 1 day, the text should be red