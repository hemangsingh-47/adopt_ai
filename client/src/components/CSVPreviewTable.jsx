import React from 'react';

const CSVPreviewTable = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="csv-preview-container">
      <h3 className="preview-title">Data Preview ({data.length} campaigns found)</h3>
      <div className="table-wrapper">
        <table className="csv-preview-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Spend</th>
              <th>Clicks</th>
              <th>Impressions</th>
              <th>CTR</th>
              <th>Conversions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>${row.spend.toLocaleString()}</td>
                <td>{row.clicks.toLocaleString()}</td>
                <td>{row.impressions.toLocaleString()}</td>
                <td>{row.ctr}</td>
                <td>{row.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CSVPreviewTable;
