import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const statusText = isOnline ? (
    <span className="text-green-500">online</span>
  ) : (
    <span className="text-red-500">offline</span>
  );

  return (
    <footer className="footer p-0 bg-secondary">
      <div className="container-fluid p-0 text-uppercase">
        <table className="table table-bordered">
          <thead>
            <tr className="text-dark">
              <th>
                partner: <span className="text-green-500">Caritas</span>{" "}
              </th>
              <th>
                State: <span className="text-green-500">Abia</span>
              </th>
              <th>
                Fiscal Year: <span className="text-green-500">2024</span>
              </th>
              <th>
                Quarter: <span className="text-green-500">1 (oct - dec)</span>
              </th>
              <th>
                Current Week: <span className="text-green-500">1</span>
              </th>
              <th>Status: {statusText}</th>
            </tr>
          </thead>
        </table>
      </div>
    </footer>
  );
};

export default Footer;
