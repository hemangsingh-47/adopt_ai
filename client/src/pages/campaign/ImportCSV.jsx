import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import useCSVParser from '../../hooks/useCSVParser';
import csvService from '../../services/csvService';
import CSVUpload from '../../components/CSVUpload';
import CSVPreviewTable from '../../components/CSVPreviewTable';
import { importCampaigns } from '../../features/campaign/campaignSlice';
import './csv_import.css';

const ImportCSV = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { parseCSV, error, setError } = useCSVParser();
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = async (selectedFile) => {
    setFile(selectedFile);
    setIsProcessing(true);
    try {
      const rawData = await parseCSV(selectedFile);
      const transformed = csvService.transformCampaignData(rawData);
      
      if (transformed.length === 0) {
        toast.error('No valid campaign data found in CSV');
        setFile(null);
      } else {
        setParsedData(transformed);
        toast.success(`${transformed.length} campaigns parsed!`);
      }
    } catch (err) {
      toast.error('Failed to parse CSV file');
      setFile(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setParsedData([]);
  };

  const handleImport = () => {
    if (parsedData.length === 0) return;
    
    dispatch(importCampaigns(parsedData));
    toast.success('Campaigns imported to dashboard!');
    navigate('/campaigns');
  };

  return (
    <div className="import-csv-page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back
        </button>
        <h1 className="page-title">Import Campaign Data</h1>
        <p className="page-subtitle">Upload CSV exports from Google Ads or Meta Ads to populate your dashboard.</p>
      </div>

      <div className="import-container">
        <CSVUpload 
          onFileSelect={handleFileSelect} 
          selectedFile={file} 
          onRemoveFile={handleRemoveFile} 
        />

        {isProcessing && <div className="processing-loader">Parsing CSV data...</div>}

        {parsedData.length > 0 && !isProcessing && (
          <>
            <CSVPreviewTable data={parsedData} />
            <div className="import-actions">
              <button className="btn-cancel" onClick={handleRemoveFile}>Discard</button>
              <button className="btn-confirm" onClick={handleImport}>
                <CheckCircle size={18} /> Import {parsedData.length} Campaigns
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImportCSV;
