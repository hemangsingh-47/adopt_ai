import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Upload, X, File, Image as ImageIcon, Film, Loader2 } from 'lucide-react';
import { uploadCreative } from '../features/creative/creativeSlice';
import toast from 'react-hot-toast';

const CreativeUpload = ({ onComplete }) => {
  const dispatch = useDispatch();
  const { uploading } = useSelector((state) => state.creative);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setName(selectedFile.name.split('.')[0]);
      
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(selectedFile);
      } else {
        setPreview(null);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setName(droppedFile.name.split('.')[0]);
      if (droppedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result);
        reader.readAsDataURL(droppedFile);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);

    try {
      await dispatch(uploadCreative(formData)).unwrap();
      toast.success('Asset uploaded successfully!');
      setFile(null);
      setPreview(null);
      setName('');
      if (onComplete) onComplete();
    } catch (err) {
      toast.error(err || 'Failed to upload asset');
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="creative-upload-container">
      <form onSubmit={handleSubmit}>
        {!file ? (
          <div 
            className="upload-dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*,video/*" 
              hidden 
            />
            <div className="upload-icon-wrapper">
              <Upload size={32} />
            </div>
            <p className="upload-text">
              <span>Click to upload</span> or drag and drop
            </p>
            <p className="upload-hint">PNG, JPG, GIF or MP4 (max. 10MB)</p>
          </div>
        ) : (
          <div className="upload-preview-section">
            <div className="preview-card">
              {preview ? (
                <img src={preview} alt="Preview" className="file-preview-img" />
              ) : (
                <div className="file-icon-placeholder">
                  {file.type.startsWith('video/') ? <Film size={48} /> : <File size={48} />}
                </div>
              )}
              <button type="button" className="btn-remove-file" onClick={clearFile}>
                <X size={16} />
              </button>
            </div>
            <div className="upload-details">
              <div className="modal-field">
                <label>Asset Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter asset name"
                  className="upload-name-input"
                />
              </div>
              <button 
                type="submit" 
                className="btn-upload-submit" 
                disabled={uploading}
              >
                {uploading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Uploading...
                  </>
                ) : (
                  'Confirm Upload'
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreativeUpload;
