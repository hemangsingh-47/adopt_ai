import React, { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';

const CSVUpload = ({ onFileSelect, selectedFile, onRemoveFile }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'text/csv') {
      onFileSelect(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="csv-upload-container">
      {!selectedFile ? (
        <div 
          className={`upload-zone ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            accept=".csv" 
            onChange={handleFileInput} 
            id="csv-input" 
            hidden 
          />
          <label htmlFor="csv-input" className="upload-label">
            <div className="upload-icon-wrapper">
              <Upload size={32} />
            </div>
            <div className="upload-text">
              <span className="upload-title">Click to upload or drag and drop</span>
              <span className="upload-subtitle">Google Ads or Meta Ads CSV exports only</span>
            </div>
          </label>
        </div>
      ) : (
        <div className="selected-file-card">
          <div className="file-info">
            <FileText size={24} className="file-icon" />
            <div className="file-details">
              <span className="file-name">{selectedFile.name}</span>
              <span className="file-size">{(selectedFile.size / 1024).toFixed(2)} KB</span>
            </div>
          </div>
          <button className="remove-file-btn" onClick={onRemoveFile}>
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CSVUpload;
