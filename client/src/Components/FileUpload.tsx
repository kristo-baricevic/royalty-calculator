import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload: (file: File) => void; 
}

const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload
    onFileUpload(acceptedFiles[0]);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>Drag 'n' drop a file here, or click to select a file</p>
    </div>
  );
};

export default FileUpload;
