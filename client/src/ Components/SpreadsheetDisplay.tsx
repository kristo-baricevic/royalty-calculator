import React from 'react';

const SpreadsheetDisplay = ({ data }) => {
  if (!data) {
    return <div>Your file will appear here.</div>;
  }

  // Render your spreadsheet data here
  // For simplicity, this example will just display data in a basic table
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetDisplay;
