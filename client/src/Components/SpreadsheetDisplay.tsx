import React from 'react';

interface SpreadsheetDisplayProps {
  data: any[];
}

const SpreadsheetDisplay = ({ data }: SpreadsheetDisplayProps) => {
  if (!data) {
    return <div>Your file will appear here.</div>;
  }

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
                <td key={cellIndex}>{cell as string}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpreadsheetDisplay;
