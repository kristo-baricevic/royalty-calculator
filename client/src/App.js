import React, { useState } from 'react';
import FileUpload from './FileUpload'; 
import SpreadsheetDisplay from './SpreadsheetDisplay';

const App = () => {
  const [spreadsheetData, setSpreadsheetData] = useState(null);

  // Function to handle file upload and processing
  const handleFileUpload = (file) => {
    // Process the file and set the spreadsheet data
    // For now, let's assume the backend returns mock data
    // Replace this with actual API call
    setSpreadsheetData([
      { Column1: 'Data1', Column2: 'Data2' }, // Mock data
      { Column1: 'Data3', Column2: 'Data4' },
    ]);
  };

  return (
    <div>
      <FileUpload onFileUpload={handleFileUpload} />
      <SpreadsheetDisplay data={spreadsheetData} />
    </div>
  );
};

export default App;
