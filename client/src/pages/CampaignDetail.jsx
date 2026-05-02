import React, { useState, useEffect } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreatives, uploadCreative } from '../features/creative/creativeSlice.js';
import toast from 'react-hot-toast';
import UploadZone from '../components/UploadZone.jsx';
import FilePreview from '../components/FilePreview.jsx';
import SEO from '../components/SEO';
import './campaignDetail.css';

const CampaignDetail = () => {
  const dispatch = useDispatch();
  const { creatives, loading, uploading } = useSelector((state) => state.creative);
  const [viewMode, setViewMode] = useState('grid');
  
  useEffect(() => {
    dispatch(fetchCreatives());
  }, [dispatch]);

  const handleFilesSelected = async (selectedFiles) => {
    // We only process the first file for simplicity in this demo,
    // although a loop with Promise.all could handle multiple.
    if (!selectedFiles || selectedFiles.length === 0) return;
    
    const file = selectedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      await dispatch(uploadCreative(formData)).unwrap();
      toast.success('Creative uploaded successfully');
    } catch (error) {
      toast.error(error || 'Failed to upload creative');
    }
  };

  return (
    <div className="campaign-detail-page">
      <SEO 
        title="Creative Repository" 
        description="Manage and optimize your campaign media assets. View performance metrics for individual creatives."
        url="/campaigns"
      />
      <div className="page-header">
        <div>
          <h1 className="page-title">Creative Repository</h1>
          <p className="page-subtitle">Manage and optimize your campaign media assets.</p>
        </div>
        <button className="filter-btn">
          <Filter size={16} />
          <span>Filter</span>
        </button>
      </div>

      <UploadZone onFilesSelected={handleFilesSelected} />

      <div className="assets-section">
        <div className="assets-header">
          <h2 className="assets-title">Active Assets</h2>
          <div className="view-toggles">
            <button 
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        <div className={`assets-${viewMode}`}>
          {loading && <p className="text-gray-400 p-4">Loading creatives...</p>}
          
          {uploading && (
            <div className="file-preview-card uploading">
              <div className="uploading-content">
                <p>Uploading new creative...</p>
              </div>
            </div>
          )}

          {!loading && creatives && creatives.map((creative) => (
            <FilePreview 
              key={creative._id} 
              file={{
                name: creative.name,
                url: creative.url,
                type: creative.resourceType === 'video' ? 'video/mp4' : 'image/jpeg'
              }} 
            />
          ))}
          
          {!loading && creatives.length === 0 && !uploading && (
            <p className="text-gray-400 p-4 w-full col-span-full">No assets found. Upload some creatives above.</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default CampaignDetail;
