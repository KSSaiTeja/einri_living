import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './ConsultationFormModal.css';
import { submitToGoogleSheets } from '../../services/submitToGoogleSheets';

/**
 * Consultation Form Modal
 * A beautifully designed modal applying UX principles:
 * - Hick's Law: Limited, well-organized choices
 * - Fitts's Law: Large, easy-to-click targets
 * - Miller's Law: Chunked information (progress indicator)
 * - Gestalt Principles: Visual grouping, proximity, similarity
 * - Doherty Threshold: Responsive feedback (<400ms)
 * - Jakob's Law: Familiar patterns (modal, form layout)
 * - Zeigarnik Effect: Progress indicator showing completion
 * - Aesthetic-Usability Effect: Beautiful design = perceived ease
 * - Law of Proximity: Related fields grouped
 * - Law of Similarity: Consistent styling
 * - Von Restorff Effect: CTA button stands out
 */
function ConsultationFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    spaceType: '',
    projectStage: '',
    totalArea: '',
    budgetRange: '',
    moveInTimeline: '',
    vision: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        spaceType: '',
        projectStage: '',
        totalArea: '',
        budgetRange: '',
        moveInTimeline: '',
        vision: ''
      });
      setErrors({});
      setSubmitStatus(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Focus first input when modal opens (Accessibility)
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current.focus(), 100);
    }
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Pause GSAP ScrollSmoother if it exists
      if (window.smoother && typeof window.smoother.paused === 'function') {
        try {
          window.smoother.paused(true);
        } catch(e) {
          console.log('Could not pause ScrollSmoother:', e);
        }
      }
    } else {
      document.body.style.overflow = 'unset';
      
      // Resume GSAP ScrollSmoother if it exists
      if (window.smoother && typeof window.smoother.paused === 'function') {
        try {
          window.smoother.paused(false);
        } catch(e) {
          console.log('Could not resume ScrollSmoother:', e);
        }
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing (Doherty Threshold)
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'Please enter your city';
    }

    if (!formData.spaceType) {
      newErrors.spaceType = 'Please select a space type';
    }

    if (!formData.projectStage) {
      newErrors.projectStage = 'Please select project stage';
    }

    if (!formData.totalArea.trim()) {
      newErrors.totalArea = 'Please enter total area';
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select budget range';
    }

    // Move-in Timeline and Vision are now optional - no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Submit to Google Sheets
    try {
      await submitToGoogleSheets(formData);
      
      setSubmitStatus('success');
      
      // Keep success message visible for 3 seconds then close
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  // Calculate progress (Zeigarnik Effect)
  // Only count required fields: fullName, email, phone, city, spaceType, projectStage, totalArea, budgetRange (8 fields)
  const calculateProgress = () => {
    const requiredFields = ['fullName', 'email', 'phone', 'city', 'spaceType', 'projectStage', 'totalArea', 'budgetRange'];
    const filledRequiredFields = requiredFields.filter(field => formData[field] && formData[field].trim() !== '').length;
    return (filledRequiredFields / 8) * 100;
  };

  if (!isOpen) return null;

  return (
    <div className="consultation-modal-overlay" onClick={onClose}>
      <div 
        className="consultation-modal-container" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Fixed Header Section */}
        <div className="consultation-modal-header-fixed">
          {/* Close Button - Top Right (Fitts's Law: Easy to click) */}
          <button 
            className="consultation-modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Logo & Title */}
          <div className="consultation-modal-header">
            <div className="consultation-logo-container">
              <img 
                src="/home1/assets/img/preloader.png" 
                alt="Einri Living" 
                className="consultation-logo"
              />
            </div>
            <h2 className="consultation-modal-title">
              Let's Design Your Dream Space
            </h2>
            <p className="consultation-modal-subtitle">
              Share a few details and we'll create something extraordinary together
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="consultation-modal-content">
          {/* Progress Indicator (Zeigarnik Effect) */}
          <div className="consultation-progress-container">
            <div className="consultation-progress-bar">
              <div 
                className="consultation-progress-fill"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <span className="consultation-progress-text">
              {Math.round(calculateProgress())}% Complete
            </span>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="consultation-success-message">
              <div className="success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>We've received your information and will contact you within 24 hours.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="consultation-error-message">
              <div className="error-icon">!</div>
              <h3>Something went wrong</h3>
              <p>Please try again or contact us directly.</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="consultation-form" style={{ display: submitStatus === 'success' ? 'none' : 'block' }}>
            {/* Section 1: Personal Info (Law of Proximity) */}
            <div className="form-section">
              <h3 className="form-section-title">Personal Information</h3>
              
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="So we know who to design for"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              {/* Email & Phone Row (Law of Similarity) */}
              <div className="form-row">
                <div className="form-group form-group-half">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="To share ideas and updates"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group form-group-half">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="For a quick consultation call"
                    maxLength="10"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              {/* City */}
              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City / Location <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="We design across India. This helps us plan better"
                  className={`form-input ${errors.city ? 'error' : ''}`}
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>
            </div>

            {/* Section 2: Project Details (Law of Proximity) */}
            <div className="form-section">
              <h3 className="form-section-title">Project Details</h3>
              
              {/* Space Type */}
              <div className="form-group">
                <label htmlFor="spaceType" className="form-label">
                  Type of Space <span className="required">*</span>
                </label>
                <select
                  id="spaceType"
                  name="spaceType"
                  value={formData.spaceType}
                  onChange={handleInputChange}
                  className={`form-select ${errors.spaceType ? 'error' : ''}`}
                >
                  <option value="">Select space type</option>
                  <option value="1BHK">1BHK</option>
                  <option value="2BHK">2BHK</option>
                  <option value="3BHK">3BHK</option>
                  <option value="4BHK">4BHK</option>
                  <option value="Villa">Villa</option>
                  <option value="Office">Office</option>
                  <option value="Café">Café</option>
                  <option value="Studio">Studio</option>
                  <option value="Other">Other</option>
                </select>
                {errors.spaceType && <span className="error-message">{errors.spaceType}</span>}
              </div>

              {/* Project Stage */}
              <div className="form-group">
                <label htmlFor="projectStage" className="form-label">
                  Project Stage <span className="required">*</span>
                </label>
                <select
                  id="projectStage"
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleInputChange}
                  className={`form-select ${errors.projectStage ? 'error' : ''}`}
                >
                  <option value="">Select project stage</option>
                  <option value="New property">New property</option>
                  <option value="Under construction">Under construction</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Just exploring ideas">Just exploring ideas</option>
                </select>
                {errors.projectStage && <span className="error-message">{errors.projectStage}</span>}
              </div>

              {/* Total Area & Budget Row */}
              <div className="form-row">
                <div className="form-group form-group-half">
                  <label htmlFor="totalArea" className="form-label">
                    Total Area (sq.ft) <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="totalArea"
                    name="totalArea"
                    value={formData.totalArea}
                    onChange={handleInputChange}
                    placeholder="E.g. 800, 1200, 2400"
                    className={`form-input ${errors.totalArea ? 'error' : ''}`}
                  />
                  {errors.totalArea && <span className="error-message">{errors.totalArea}</span>}
                </div>

                <div className="form-group form-group-half">
                  <label htmlFor="budgetRange" className="form-label">
                    Approximate Budget <span className="required">*</span>
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className={`form-select ${errors.budgetRange ? 'error' : ''}`}
                  >
                    <option value="">Select budget range</option>
                    <option value="5-10 Lakhs">₹5-10 Lakhs</option>
                    <option value="10-20 Lakhs">₹10-20 Lakhs</option>
                    <option value="20-35 Lakhs">₹20-35 Lakhs</option>
                    <option value="35-50 Lakhs">₹35-50 Lakhs</option>
                    <option value="50+ Lakhs">₹50+ Lakhs</option>
                    <option value="Open to Discussion">Open to Discussion</option>
                  </select>
                  {errors.budgetRange && <span className="error-message">{errors.budgetRange}</span>}
                </div>
              </div>

              {/* Move-in Timeline */}
              <div className="form-group">
                <label htmlFor="moveInTimeline" className="form-label">
                  Move-in Timeline
                </label>
                <select
                  id="moveInTimeline"
                  name="moveInTimeline"
                  value={formData.moveInTimeline}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">When do you plan to move or start?</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="12+ months">12+ months</option>
                </select>
              </div>
            </div>

            {/* Section 3: Your Vision (Law of Proximity) */}
            <div className="form-section">
              <h3 className="form-section-title">Your Vision</h3>
              
              <div className="form-group">
                <label htmlFor="vision" className="form-label">
                  Tell us about your vision
                </label>
                <textarea
                  id="vision"
                  name="vision"
                  value={formData.vision}
                  onChange={handleInputChange}
                  placeholder="What kind of vibe or aesthetic do you dream of?"
                  rows="4"
                  className="form-textarea"
                ></textarea>
              </div>
            </div>

            {/* CTA Button (Von Restorff Effect - stands out) */}
            <button 
              type="submit" 
              className="consultation-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Submitting...
                </>
              ) : (
                <>
                  <span>✨</span>
                  Book My Design Consultation
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConsultationFormModal;
