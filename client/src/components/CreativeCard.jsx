import React from 'react';
import { Film, Image as ImageIcon, Trash2, Calendar, ExternalLink } from 'lucide-react';

const CreativeCard = ({ creative, onDelete }) => {
  const isVideo = creative.resourceType === 'video';
  const date = new Date(creative.createdAt).toLocaleDateString();

  return (
    <div className="creative-card">
      <div className="creative-card-media">
        {isVideo ? (
          <div className="video-placeholder">
            <Film size={40} className="media-icon" />
            <video src={creative.url} muted className="hover-video-preview" />
          </div>
        ) : (
          <img src={creative.url} alt={creative.name} className="creative-img" />
        )}
        <div className="creative-card-overlay">
          <a href={creative.url} target="_blank" rel="noopener noreferrer" className="overlay-btn">
            <ExternalLink size={16} />
          </a>
          <button className="overlay-btn delete" onClick={() => onDelete(creative._id)}>
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <div className="creative-card-info">
        <div className="creative-type-tag">
          {isVideo ? <Film size={12} /> : <ImageIcon size={12} />}
          <span>{isVideo ? 'Video' : 'Image'}</span>
        </div>
        <h3 className="creative-name">{creative.name}</h3>
        <div className="creative-meta">
          <Calendar size={12} />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CreativeCard;
