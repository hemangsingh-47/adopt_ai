import { useState } from 'react';

const useCSVParser = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const parseCSV = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const text = e.target.result;
          const lines = text.split('\n').filter(line => line.trim() !== '');
          const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
          
          const result = lines.slice(1).map(line => {
            const values = line.split(',').map(v => v.trim());
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = values[index];
            });
            return obj;
          });
          
          setData(result);
          resolve(result);
        } catch (err) {
          setError('Failed to parse CSV file');
          reject(err);
        }
      };

      reader.onerror = () => {
        setError('Error reading file');
        reject(new Error('Error reading file'));
      };

      reader.readAsText(file);
    });
  };

  return { parseCSV, data, error, setError };
};

export default useCSVParser;
