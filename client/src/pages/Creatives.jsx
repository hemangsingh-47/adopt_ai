import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Plus, Filter, LayoutGrid, List, X } from 'lucide-react';
import { fetchCreatives, deleteCreative } from '../features/creative/creativeSlice';
import CreativeCard from '../components/CreativeCard';
import CreativeUpload from '../components/CreativeUpload';
import SEO from '../components/SEO';
import toast from 'react-hot-toast';

const Creatives = () => {
  const dispatch = useDispatch();
  const { creatives, loading } = useSelector((state) => state.creative);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCreatives());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this asset?')) {
      dispatch(deleteCreative(id))
        .unwrap()
        .then(() => toast.success('Asset deleted'))
        .catch((err) => toast.error(err));
    }
  };

  const filteredCreatives = creatives.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="creatives-page">
      <SEO 
        title="Creatives Library" 
        description="Manage your marketing assets, images, and videos. Upload new creatives for your campaigns."
        url="/creatives"
      />

      <div className="top-search-nav">
        <div className="search-bar-wrapper">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search assets..." 
            className="search-input" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="nav-actions">
          <button className="btn-new-campaign-top" onClick={() => setIsUploadOpen(true)}>
            <Plus size={16} /> Upload Asset
          </button>
        </div>
      </div>

      <div className="creatives-header">
        <div>
          <h1 className="page-title">Creatives Library</h1>
          <p className="page-subtitle">Your central hub for marketing assets and media.</p>
        </div>
        <div className="header-filters">
          <button className="filter-icon-btn active">
            <LayoutGrid size={18} />
          </button>
          <button className="filter-icon-btn">
            <List size={18} />
          </button>
          <button className="filter-icon-btn">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {isUploadOpen && (
        <div className="upload-section-inline">
          <div className="section-header">
            <h3>Upload New Assets</h3>
            <button className="close-btn" onClick={() => setIsUploadOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <CreativeUpload onComplete={() => setIsUploadOpen(false)} />
        </div>
      )}

      {loading ? (
        <div className="loading-state">Loading library...</div>
      ) : filteredCreatives.length > 0 ? (
        <div className="creatives-grid">
          {filteredCreatives.map((creative) => (
            <CreativeCard 
              key={creative._id} 
              creative={creative} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">
            <LayoutGrid size={48} />
          </div>
          <h3>No assets found</h3>
          <p>Start by uploading your first creative asset.</p>
          <button className="btn-upload-empty" onClick={() => setIsUploadOpen(true)}>
            Upload Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Creatives;
