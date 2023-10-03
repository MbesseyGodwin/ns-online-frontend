import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";

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
    Header: "Duration",
    accessor: "datetime",
    Cell: ({ value }) => {
      const uploadDateTime = new Date(value);
      const currentDateTime = new Date();
      const durationMilliseconds = currentDateTime - uploadDateTime;
      const durationMinutes = Math.floor(durationMilliseconds / (1000 * 60));
      const durationHours = Math.floor(durationMinutes / 60);
      const durationDays = Math.floor(durationHours / 24);

      if (durationMinutes < 60) {
        return `${durationMinutes} minutes ago`;
      } else if (durationHours < 24) {
        return `${durationHours} hours ago`;
      } else {
        return `${durationDays} days ago`;
      }
    },
  },
];

function UploadTracker() {
  const apiURL = process.env.REACT_APP_API_URL;

  const [isLoading, setIsLoading] = useState(true);
  const [uploadList, setUploadList] = useState([]);

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

  const defaultColumn = useMemo(() => ({ Filter: null }), []);
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
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <div className="">
      <h1 className="h2">Facility Upload Tracker</h1>
      <div className="mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />

      </div>
      <table className="table table-auto table-bordered" {...getTableProps()}>
        <thead className="thead-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {isLoading ? (
            <tr>
              <td className="text-center text-white h1 text-uppercase" colSpan={columns.length}>
                loading list, please wait... <i className="fa-solid fa-arrows-spin fa-spin"></i>
              </td>
            </tr>
          ) : (
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
        </tbody>
      </table>
    </div>
  );
}

export default UploadTracker;
