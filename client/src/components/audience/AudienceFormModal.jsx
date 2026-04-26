import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { createAudienceSegment } from '../../features/audience/audienceSlice';

const AudienceFormModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      platform: 'Meta Ads',
      size: '',
      conversionRate: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      platform: Yup.string().oneOf(['Meta Ads', 'Google Ads']).required('Required'),
      size: Yup.string().required('Required (e.g., 2.4M)'),
      conversionRate: Yup.string().required('Required (e.g., 4.2%)'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await dispatch(createAudienceSegment(values)).unwrap();
        toast.success('Audience created successfully!');
        resetForm();
        onClose();
      } catch (err) {
        toast.error(err || 'Failed to create audience');
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Create Audience Segment</h2>
          <button className="icon-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={formik.handleSubmit} className="modal-form">
          <div className="form-group">
            <label className="form-label">Segment Name</label>
            <input
              type="text"
              name="name"
              className={`form-input ${formik.touched.name && formik.errors.name ? 'input-error' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="e.g., Cart Abandoners (30 Days)"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error-text">{formik.errors.name}</div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Platform</label>
            <select
              name="platform"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.platform}
            >
              <option value="Meta Ads">Meta Ads</option>
              <option value="Google Ads">Google Ads</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label className="form-label">Est. Size</label>
              <input
                type="text"
                name="size"
                className={`form-input ${formik.touched.size && formik.errors.size ? 'input-error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.size}
                placeholder="e.g., 2.4M"
              />
              {formik.touched.size && formik.errors.size && (
                <div className="error-text">{formik.errors.size}</div>
              )}
            </div>

            <div className="form-group half">
              <label className="form-label">Conv. Rate</label>
              <input
                type="text"
                name="conversionRate"
                className={`form-input ${formik.touched.conversionRate && formik.errors.conversionRate ? 'input-error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.conversionRate}
                placeholder="e.g., 4.2%"
              />
              {formik.touched.conversionRate && formik.errors.conversionRate && (
                <div className="error-text">{formik.errors.conversionRate}</div>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={onClose} disabled={formik.isSubmitting}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Creating...' : 'Create Segment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AudienceFormModal;
