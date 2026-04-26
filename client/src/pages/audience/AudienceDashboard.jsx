import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, Filter, Globe, Activity, Users, Plus } from 'lucide-react';
import { fetchSegments, setFilter, setSearch, filterSegments } from '../../features/audience/audienceSlice';
import { useDebounce } from '../../hooks/useDebounce';
import AudienceCard from '../../components/audience/AudienceCard';
import SegmentItem from '../../components/audience/SegmentItem';
import AudienceFormModal from '../../components/audience/AudienceFormModal';
import './audience.css';

const AudienceDashboard = () => {
  const dispatch = useDispatch();
  const { filteredSegments, loading, filter, searchQuery } = useSelector((state) => state.audience);
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchSegments());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterSegments());
  }, [debouncedSearch, filter, dispatch]);

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleFilterClick = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  return (
    <div className="audience-dashboard">
      {/* Header */}
      <div className="audience-header-wrapper">
        <div className="audience-header">
          <div>
            <h1 className="page-title">Audience Intelligence</h1>
            <p className="page-subtitle">Manage and optimize your active segments across platforms.</p>
          </div>
          <button 
            className="btn-primary-purple"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus size={16} /> Create Audience
          </button>
        </div>

        <div className="audience-controls">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search segments, IDs, or sources..."
              className="audience-search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="filter-wrapper">
            <div className="filter-group">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterClick('all')}
              >
                All Sources
              </button>
              <button 
                className={`filter-btn ${filter === 'meta' ? 'active' : ''}`}
                onClick={() => handleFilterClick('meta')}
              >
                Meta
              </button>
              <button 
                className={`filter-btn ${filter === 'google' ? 'active' : ''}`}
                onClick={() => handleFilterClick('google')}
              >
                Google
              </button>
            </div>
            <button className="icon-btn-border">
              <Filter size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="audience-stats-grid">
        <AudienceCard 
          title="Total Reach" 
          value="14.2M" 
          subtext="8.4%" 
          isPositive={true} 
          icon={Globe} 
        />
        <AudienceCard 
          title="Avg. Match Rate" 
          value="78%" 
          subtext="across all networks" 
          isPositive={false} 
          icon={Activity} 
        />
        <AudienceCard 
          title="Active Segments" 
          value="24" 
          subtext="+3 this week" 
          isPositive={true} 
          icon={Users} 
        />
      </div>

      {/* Segment List */}
      <div className="segment-list-section">
        <h2 className="section-title">Top Performing Segments</h2>
        <div className="segment-list">
          {loading ? (
            <div className="loading-state">Loading segments...</div>
          ) : filteredSegments.length > 0 ? (
            filteredSegments.map((segment) => (
              <SegmentItem key={segment._id || segment.id} segment={segment} />
            ))
          ) : (
            <div className="empty-state">No segments found.</div>
          )}
        </div>
      </div>

      <AudienceFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default AudienceDashboard;
