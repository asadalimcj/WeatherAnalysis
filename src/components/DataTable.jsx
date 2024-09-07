import React from "react";

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                style={{ border: "1px solid black", padding: "8px" }}
                className="text-white"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td
                  key={index}
                  style={{ border: "1px solid black", padding: "8px" }}
                  className="text-white"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
